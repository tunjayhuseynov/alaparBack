using AlApar.Classes;
using AlApar.Classes.Common;
using AlApar.Middleware;
using AlApar.Models;
using AlApar.Models.Auth;
using AlApar.Repositories.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static AlApar.Middleware.TokenService;
using static AlApar.Repositories.Status;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : Controller
    {
        private readonly ITokenService _tokenService;
        private readonly IUser _user;
        private readonly IUtility _utility;
        private readonly Jwt jwt;
        private readonly UserContext userContext;
        private TokenValidation userToken;
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly IConfiguration configuration;
        public UserController(ITokenService tokenService, IConfiguration configuration, IUtility utility, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IWebHostEnvironment webHostEnvironment)
        {
            _tokenService = tokenService;
            _user = user;
            jwt = jwtOption.Value;
            _user._db = userContext;
            this.userContext = userContext;
            _utility = utility;
            this.webHostEnvironment = webHostEnvironment;
            this.configuration = configuration;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            if (HttpContext != null && HttpContext.Items.ContainsKey("userToken"))
            {
                userToken = HttpContext.Items["userToken"] as TokenValidation;
            }
        }

        [Route("Image")]
        [Consumes("multipart/form-data")]
        [HttpPost]
        public async Task<object> getImage(IFormFile images)
        {
            return await _utility.SaveTempImage(images, $"images/users", webHostEnvironment);
        }

        [Route("Image")]
        [HttpDelete]
        public async Task<OkResult> deleteImage([FromBody] ImageName imageName)
        {
            await _utility.deleteTempImage(imageName.name, $"images/users", webHostEnvironment);

            return Ok();
        }

        [Route("businesstypes")]
        [AllowAnonymous]
        public async Task<IActionResult> getBusinessTypes()
        {
            return Ok(await userContext.BusinessTypes.ToListAsync());
        }

        [Route("businessprices")]
        [AllowAnonymous]
        public async Task<IActionResult> getBusinessPrices()
        {
            return Ok(await userContext.BusinessPrices.ToListAsync());
        }


        [Route("get")]
        public async Task<object> GetUser()
        {
            if (userToken.isValid)
                return Ok(await _user.getUser(userToken.UserId));


            return StatusCode(StatusCodes.Status401Unauthorized, new { message = "Unauthorized" });
        }


        [Route("wallet/limitless")]
        public async Task<IActionResult> setLimitless()
        {
            try
            {
                var user = await _user.getUser(userToken.UserId);

                if (user.Limitless == true)
                {
                    return BadRequest(new { message = "You've already use a Limitless Account" });
                }

                if (user.Wallet.Amount >= (int)Prices.Limitless)
                {
                    user.Wallet.Amount -= (int)Prices.Limitless;
                    user.Limitless = true;
                    user.LimitlessDuration = DateTime.UtcNow.AddMonths(1);
                    userContext.Users.Update(user);
                    await userContext.SaveChangesAsync();

                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status402PaymentRequired, new { message = "Insufficient Balance" });
                }
            }
            catch (Exception)
            {
                return StatusCode(500);
                throw;
            }
        }

        [Route("wallet/amount")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var user = await _user.getUser(userToken.UserId);

                return Ok(new { amount = user.Wallet.Amount });
            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status406NotAcceptable, new { message = "Such a user does not exist", serverError = e.Message.ToString() });
            }
        }

        [Route("wallet/amount/{amount}")]
        public async Task<IActionResult> IncreaseWalletAmount(double amount)
        {
            try
            {
                var user = await _user.getUser(userToken.UserId);
                user.Wallet.Amount += amount;
                userContext.Update(user);
                await userContext.SaveChangesAsync();

                return Ok(new { amount = user.Wallet.Amount });
            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status406NotAcceptable, new { message = "Such a user does not exist", serverError = e.Message.ToString() });
            }
        }


        [Route("chat/contacts/{skip?}/{take?}")]
        public async Task<IActionResult> GetContacts(int skip = 0, int take = 20)
        {
            var contacts = await userContext.ChatUsers.AsQueryable().AsNoTracking().Include(w => w.Chat).Include(w => w.Chat.ChatUser).ThenInclude(w => w.User).Where(w => w.UserId == userToken.UserId).OrderByDescending(w => w.Last_Interaction).Skip(skip).Take(take).Select(w => new { w.Chat, unread = w.Chat.Messages.Count(s => s.Checked == false && s.SenderId != userToken.UserId) }).ToListAsync();

            return contacts.Any() ? Ok(contacts) : NotFound(new { message = "Not Found" });
        }

        [Route("chat/{id}")]
        public async Task<IActionResult> GetChat(long id)
        {
            if (userContext.ChatUsers.AsQueryable().Any(w => w.UserId == userToken.UserId && w.ChatId == id))
            {
                var chat = await userContext.Chats.AsQueryable().AsNoTracking().Include(w => w.ChatUser).ThenInclude(w => w.User).Where(w => w.Id == id).FirstAsync();

                return chat != null ? Ok(chat) : NotFound(new { message = "Not Found" });
            }

            return Unauthorized();
        }

        [Route("chat/{id}/messages/{skip?}")]
        public async Task<IActionResult> GetMessages(long id, int skip = 0)
        {
            if (userContext.ChatUsers.AsQueryable().Any(w => w.ChatId == id && w.UserId == userToken.UserId))
            {
                var messages = await userContext.Messages.AsQueryable().AsNoTracking().Where(w => w.ChatId == id).Skip(skip).Take(50).OrderBy(w => w.Sent_Date).ToListAsync();

                return messages.Any() ? Ok(messages) : NotFound(new { message = "Not Found" });
            }

            return Unauthorized();
        }

        [Route("chat/{id}/messages/seen")]
        public async Task<IActionResult> Seen(long id)
        {
            if (userContext.ChatUsers.AsQueryable().Any(w => w.ChatId == id && w.UserId == userToken.UserId))
            {
                var chat = await userContext.Chats.AsQueryable().Include(w => w.Messages).Include(w => w.ChatUser).FirstAsync(w => w.Id == id);

                var message = chat.Messages.Where(w => w.SenderId != userToken.UserId && w.Checked == false);

                foreach (var item in message)
                {
                    item.Checked = true;
                }

                await userContext.SaveChangesAsync();

                return Ok();
            }

            return Unauthorized();
        }

        [Route("chat/contact/{publicId}")]
        public async Task<IActionResult> GetUserByPublicId(string publicId)
        {
            var chatId = new long?();
            var peer = await userContext.Users.AsQueryable().AsNoTracking().FirstAsync(w => w.PublicId == publicId);
            var user = await userContext.ChatUsers.AsQueryable().Include(w => w.Chat.ChatUser).Where(w => w.UserId == userToken.UserId).ToListAsync();
            foreach (var item in user)
            {
                if (item.Chat.ChatUser.Any(s => s.UserId == peer.Id))
                {
                    chatId = item.Chat.ChatUser.First(s => s.UserId == peer.Id).ChatId;
                }
            }
            return Ok(new { chatId, peer });
        }


        public class BusinessPayload
        {
            public string Name { get; set; }
            public int BusinessTypeId { get; set; }
            public string Description { get; set; }
            public string Address { get; set; }
            public string WeekdayStart { get; set; }
            public string WeekdayEnd { get; set; }
            public string SaturdayStart { get; set; }
            public string SaturdayEnd { get; set; }
            public string SundayStart { get; set; }
            public string SundayEnd { get; set; }
            public string LogoName { get; set; }
            public double? Lat { get; set; }
            public double? Lon { get; set; }
            public string Phone1 { get; set; }
            public string Phone2 { get; set; }
            public string Phone3 { get; set; }
            public int Duration { get; set; }
        }

        [Route("business/create")]
        public async Task<IActionResult> CreateBusiness([FromBody] BusinessPayload payload)
        {

            var tempFolder = Path.Combine(webHostEnvironment.WebRootPath, "images/users");
            var mainFolder = Path.Combine(webHostEnvironment.WebRootPath, $"images/premium/users/{userToken.UserId}");
            try
            {
                using var transaction = userContext.Database.BeginTransaction();
               
                var user = await _user.getUser(userToken.UserId);
                var price = await userContext.BusinessPrices.FindAsync(payload.Duration);
                if (user.BusinessAccountId != null) return BadRequest(new { message = "Already Active" });
                if (user.Wallet.Amount >= price.Price)
                {
                    if (System.IO.File.Exists($"{tempFolder}/{payload.LogoName}"))
                    {
                        if (!Directory.Exists($"{mainFolder}"))
                        {
                            Directory.CreateDirectory($"{mainFolder}");
                        }

                        Image orgimg = Image.FromFile($"{tempFolder}/{payload.LogoName}");

                        orgimg.Save($"{mainFolder}/{payload.LogoName}", ImageFormat.Jpeg);
                        orgimg.Dispose();

                        System.IO.File.SetAttributes($"{tempFolder}/{payload.LogoName}", FileAttributes.Normal);
                        System.IO.File.Delete($"{tempFolder}/{payload.LogoName}");
                    }
                    else
                    {
                        return NotFound(new { message = "Image Not Found" });
                    }

                    BusinessAccounts instance = new()
                    {
                        Name = payload.Name,
                        Phone1 = payload.Phone1,
                        Phone2 = payload.Phone2,
                        Phone3 = payload.Phone3,
                        Address = payload.Address,
                        Lat = payload.Lat.ToString(),
                        Lon = payload.Lon.ToString(),
                        Description = payload.Description,
                        BusinessTypeId = payload.BusinessTypeId,
                        TillDate = DateTime.UtcNow.AddMonths(price.Months),
                        Active = true,
                        WeekdayStart = payload.WeekdayStart,
                        WeekdayEnd = payload.WeekdayEnd,
                        SaturdayStart = payload.SaturdayStart,
                        SaturdayEnd = payload.SaturdayEnd,
                        SundayStart = payload.SundayStart,
                        SundayEnd = payload.SundayEnd,
                        Logo = $"{mainFolder}/{payload.LogoName}"
                    };

                    await userContext.BusinessAccounts.AddAsync(instance);
                    await userContext.SaveChangesAsync();

                    user.BusinessAccountId = instance.Id;
                    user.Wallet.Amount -= price.Price;
                    await userContext.SaveChangesAsync();



                    await transaction.CommitAsync();

                    Response.Cookies.Append("business_user", user.BusinessAccount.Id.ToString(), new CookieOptions
                    {
                        Secure = !configuration.GetValue<string>("Mode").Equals("Development"),
                        MaxAge = TimeSpan.FromMinutes(30),
                        HttpOnly = false,
                        IsEssential = true
                    });
                    return Ok(new { message = "Saved!" });
                }
                else
                {
                    await transaction.RollbackAsync();
                    return StatusCode(StatusCodes.Status416RequestedRangeNotSatisfiable, new { message = "Insufficint Balance" });
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("business/activate/{priceId}")]
        public async Task<IActionResult> ActivateBusiness(int priceId)
        {
            try
            {
                using var transaction = userContext.Database.BeginTransaction();
                var user = await _user.getUser(userToken.UserId);
                var price = await userContext.BusinessPrices.FindAsync(priceId);
                if (user.BusinessAccount.Active == true) return BadRequest(new { message = "Already Active" });
                if (user.Wallet.Amount >= price.Price )
                {
                    user.BusinessAccount.Active = true;
                    user.BusinessAccount.TillDate = DateTime.UtcNow.AddMonths(price.Months);
                    user.Wallet.Amount -= price.Price;
                    await userContext.SaveChangesAsync();


                    await transaction.CommitAsync();

                    Response.Cookies.Append("business_user", user.BusinessAccount.Id.ToString(), new CookieOptions
                    {
                        Secure = !configuration.GetValue<string>("Mode").Equals("Development"),
                        MaxAge = TimeSpan.FromMinutes(30),
                        HttpOnly = false,
                        IsEssential = true
                    });

                    return Ok(new { message = "Saved!" });
                }
                else
                {
                    await transaction.RollbackAsync();
                    return StatusCode(StatusCodes.Status416RequestedRangeNotSatisfiable, new { message = "Insufficint Balance" });
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
