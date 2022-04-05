using AlApar.Classes;
using AlApar.Controllers;
using AlApar.Middleware;
using AlApar.Models;
using AlApar.Models.CommonModel;
using AlApar.Models.View;
using AlApar.Repositories.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using static AlApar.Middleware.TokenService;

namespace AlApar.Repositories.Common
{
    public abstract class CommonController<ICrud, Context, View, Form, ImageName, Ads, Contact, Log, Category, Image, StoryModel> :
        PaymentController<ICrud, Context, View, Form, ImageName, Ads, Contact, Log, Category, StoryModel>,
        ICommonController<View, Form, ImageName>
        where ICrud : ICommon<View, Context, Form, Ads, Contact, Log, Category, StoryModel>
        where Context : DbContext
        where View : CommonViewProperities, new()
        where Form : class, new()
        where ImageName : Classes.Common.ImageName, new()
        where Ads : CommonAds, new()
        where Contact : class, new()
        where Log : CommonLogs, new()
        where Image : CommonImages, new()
        where StoryModel : CommonStory, new()

    {
        private readonly ICrud _crud;
        private readonly IUtility _utility;
        private readonly Context _db;
        private readonly ITokenService _tokenService;
        private readonly IUser _user;
        private readonly Jwt jwt;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IMemoryCache memoryCache;


        protected CommonController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, ICrud crud, Context _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache)
        : base(tokenService, user, userContext, jwtOption, crud, _db, utility, webHostEnvironment)
        {
            _tokenService = tokenService;
            _user = user;
            jwt = jwtOption.Value;
            _user._db = userContext;
            _crud = crud;
            _utility = utility;
            this._db = _db;
            _webHostEnvironment = webHostEnvironment;
            this.memoryCache = memoryCache;

        }

        [Route("Add")]
        [Authorize]
        [HttpPost]
        [Consumes("application/json; charset=UTF-8")]
        public async Task<IActionResult> addToDb([FromBody] Form form)
        {
            string access_token = Request.Cookies["access_token"];
            var userInfo = _tokenService.IsTokenValid(jwt.Key, jwt.Issuer, jwt.Audience, access_token);

            if (userInfo.isValid)
            {
                List<ImageStructure> imageNames = (List<ImageStructure>)form.GetType().GetProperty("ImageList").GetValue(form);
                if (imageNames.Count > 25) return StatusCode(406, new { status = "Faly sayı 25-i keçməməlidir" });

                await _crud.addToDb(form, _db, _utility, userInfo.UserId, _webHostEnvironment);

                return Ok();
            }

            return StatusCode(401);
        }


        [Route("Filter")]
        public async Task<object> getFilter()
        {
            return await _crud.getForm(_db);
        }

        [Route("Form")]
        public async Task<object> getForm()
        {
            return await _crud.getForm(_db);
        }

        [Route("Image")]
        [Consumes("multipart/form-data")]
        [HttpPost]
        [Authorize]
        public async Task<object> getImage(IFormFile images)
        {
            return await _crud.saveTempImage(images, _utility, _webHostEnvironment) ?? StatusCode(415);
        }

        [Route("Image")]
        [HttpDelete]
        [Authorize]
        public async Task<OkResult> deleteImage([FromBody] ImageName name)
        {
            await _crud.deleteTempImage(name.name, _utility, _webHostEnvironment);

            return Ok();
        }

        [Route("Image/exist")]
        [HttpDelete]
        [Authorize]
        public async Task<IActionResult> deleteExistImage([FromBody] ImageName name)
        {
            var userToken = HttpContext.Items["userToken"] as TokenValidation;
            var ad = await _db.Set<Ads>().FindAsync(name.adId);
            if (userToken.UserId != ad.UserId) return Unauthorized();

            try
            {
                await _utility.DeleteExistImage(name.name, _webHostEnvironment);

                var img = await _db.Set<Image>().FindAsync(name.id);
                _db.Set<Image>().Remove(img);
                await _db.SaveChangesAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw;
            }

            return Ok();
        }

        [Route("Image/rotate")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> rotateExistImage([FromBody] ImageName name)
        {
            var userToken = HttpContext.Items["userToken"] as TokenValidation;
            var ad = await _db.Set<Ads>().FindAsync(name.adId);
            if (userToken.UserId != ad.UserId) return Unauthorized();

            try
            {
                await _utility.RotateExistImage<Context, Image>(name.id, name.rotate, _db, _webHostEnvironment);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw;
            }

            return Ok();
        }

        [Route("Get/{id}")]
        public async Task<object> getOne(long id)
        {
            return await _crud.getAd(_utility, id, _db) ?? NotFound(new { NotFound = true });
        }

        [HttpPost]
        [Route("Search")]
        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t, CancellationToken cancellationToken = default)
        {
            return (await _crud.PostFilter(res, _db, "CategoryId", s, t, _utility, cancellationToken)) ?? NotFound(new { NotFound = true });
        }

        [Route("mainmenu")]
        public async Task<object> getMainMenu([FromQuery] int num = 4)
        {
            return await _crud.getMainMenuStuffs(_utility, _db, num);
        }

        [Route("mainmenu2")]
        public async Task<object> getMainMenu2([FromQuery] int num = 24)
        {
            return await _crud.getMainMenuStuffs2(_utility, _db, num);
        }

        public Task<IEnumerable<View>> getAll()
        {
            throw new NotImplementedException();
        }

        [Route("add/setdiscount/{id}/{discount}")]
        public async Task<IActionResult> SetDiscount(long id, int discount)
        {

            string access_token = Request.Cookies["access_token"];
            var userInfo = _tokenService.IsTokenValid(jwt.Key, jwt.Issuer, jwt.Audience, access_token);

            var ad = await _db.Set<Ads>().FindAsync(id);

            if (userInfo.isValid && (ad.GetType().GetProperty("UserId").GetValue(ad) as long?) == Convert.ToInt64(userInfo.UserId))
            {
                return (await _crud.SetDiscount(id, discount, _db, _utility)) ? Ok() : BadRequest();
            }

            return StatusCode(401);
        }

        [Route("edit/{id}")]
        [HttpPost]
        [Consumes("application/json; charset=UTF-8")]
        [Authorize]
        public async Task<IActionResult> Edit([FromBody] Form form, long id)
        {
            try
            {
                string access_token = Request.Cookies["access_token"];
                var userInfo = _tokenService.IsTokenValid(jwt.Key, jwt.Issuer, jwt.Audience, access_token);

                if ((await _db.Set<Ads>().FindAsync(id)).UserId != userInfo.UserId) return Unauthorized();

                await _crud.update2Db(id, form, _db, _utility, userInfo.UserId, _webHostEnvironment);

                return Ok();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("getedit/{id}")]
        public async Task<IActionResult> EditAd(long id)
        {
            var res = new Dictionary<string, object>();

            var ad = await _db.Set<Ads>().FindAsync(id);
            var contactAd = await _db.Set<Contact>().FindAsync(ad.ContactId);
            var photos = _db.Set<Image>().AsNoTracking().Where(w => w.AdId == id);

            var properities = typeof(Form).GetTypeInfo().GetProperties();
            var type = typeof(Ads).GetTypeInfo();
            var contactType = typeof(Contact).GetTypeInfo();

            foreach (var item in properities)
            {
                if (type.GetProperty(item.Name) != null)
                {
                    var attr = item.GetCustomAttribute<JsonPropertyAttribute>();

                    if (attr != null)
                    {
                        res.Add(attr.PropertyName, type.GetProperty(item.Name).GetValue(ad));
                    }
                }
                else if (contactType.GetProperty(item.Name) != null)
                {
                    var attr = item.GetCustomAttribute<JsonPropertyAttribute>();

                    if (attr != null)
                    {
                        res.Add(attr.PropertyName, contactType.GetProperty(item.Name).GetValue(contactAd));
                    }
                }
            }

            res.Add("images", photos);
            res.Add("userId", ad.UserId);

            return Ok(res);
        }


        [Route("saveip/{id}")]

        public async Task<IActionResult> saveViewer(long id)
        {
            using var transaction = await _db.Database.BeginTransactionAsync();
            try
            {
                var elan = await _db.Set<Ads>().FindAsync(id);
                var ip = HttpContext.Connection.RemoteIpAddress?.ToString();

                if (ip != null)
                {
                    var loggin = await _db.Set<Log>().FindAsync(elan.LogId);
                    var ipList = JsonConvert.DeserializeObject<IpAdressesJson>(loggin.UserIpAdresses);

                    if (!ipList.IpAdresses.Where(w => w.UserIp == ip).Any())
                    {
                        ipList.IpAdresses.Add(new IpAdress
                        {
                            UserIp = ip,
                            EnteredDatetime = DateTime.UtcNow
                        });

                        string ipSerizalized = System.Text.Json.JsonSerializer.Serialize(ipList);
                        loggin.UserIpAdresses = ipSerizalized;
                        _db.Set<Log>().Update(loggin);
                        await _db.SaveChangesAsync();
                        elan.Viewed++;
                        _db.Update(elan);
                        await _db.SaveChangesAsync();
                    }
                    await transaction.CommitAsync();
                    return Ok();
                }

                return BadRequest();
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                Console.WriteLine(e.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("TempVideo")]
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> SaveTempVideo(IFormFile video)
        {
            Console.WriteLine(video.ContentType);
            var res = await _crud.SaveTempVideo(video, _utility, _webHostEnvironment);

            return Ok(res);
        }

        [Route("add/story")]
        [HttpPost]
        [Authorize]
        [Consumes("application/json; charset=UTF-8")]
        public async Task<IActionResult> SaveStory([FromBody] CommonStory story)
        {
            try
            {
                string access_token = Request.Cookies["access_token"];
                var userInfo = _tokenService.IsTokenValid(jwt.Key, jwt.Issuer, jwt.Audience, access_token);

                var res = await _crud.SaveStory(story, userInfo.UserId, _db, _utility, _webHostEnvironment);

                return Ok(res);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw;
            }
        }

        [Route("user/ads")]
        public async Task<IActionResult> GetUser()
        {
            string access_token = Request.Cookies["access_token"];
            var userInfo = _tokenService.IsTokenValid(jwt.Key, jwt.Issuer, jwt.Audience, access_token);

            return Ok(await _db.Set<View>().AsQueryable().Where(w => w.UserId == userInfo.UserId).ToListAsync());
        }

        [Route("story/{id}")]
        public async Task<IActionResult> GetStory(long id)
        {
            var story = await _db.Set<StoryModel>().FindAsync(id);

            return story != null ? Ok(story) : NotFound(new { message = "Not Found" });
        }

        [Route("stories")]
        public async Task<IActionResult> GetStories()
        {
            return Ok(await _db.Set<StoryModel>().AsQueryable().Take(10).ToListAsync());
        }

        [Route("vips")]
        public async Task<IActionResult> getVIPads([FromQuery] int num = 8)
        {
            List<View> cache;
            if (memoryCache.TryGetValue($"{HttpContext.Request.Path}", out cache))
            {
                return Ok(cache);
            }
            var cacheExpiryOptions = new MemoryCacheEntryOptions
            {
                AbsoluteExpiration = DateTime.Now.AddMinutes(1),
                Priority = CacheItemPriority.High,
                SlidingExpiration = TimeSpan.FromMinutes(1),
                Size = 10240,
            };
            var ads = await _crud.GetVips(_db, _utility, num);
            memoryCache.Set($"{HttpContext.Request.Path}", ads, cacheExpiryOptions);
            return Ok(ads);

        }

    }
}
