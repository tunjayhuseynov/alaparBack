using static AlApar.Middleware.TokenService;
using Microsoft.AspNetCore.Mvc.Filters;
using AlApar.Repositories;
using AlApar.Models.CommonModel;

namespace AlApar.Controllers
{
    public class PaymentController<ICrud, Context, View, Form, Name, Ads, Contact, Log, Category, StoryModel> : Controller
        where ICrud : ICommon<View, Context, Form, Ads, Contact, Log, Category, StoryModel>
        where Context : DbContext
        where View : class, new()
        where Form : class, new()
        where Name : ImageName, new()
        where Ads : CommonAds, new()
        where Contact : class, new()
        where Log : CommonLogs, new()
        where StoryModel : CommonStory, new()
    {
        private readonly ICrud _crud;
        private readonly IUtility _utility;
        private readonly Context _db;
        private readonly ITokenService _tokenService;
        private readonly IUser _user;
        private readonly Jwt jwt;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly UserContext userContext;
        private TokenValidation userToken;
        public PaymentController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, ICrud crud, Context _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        {
            _tokenService = tokenService;
            _user = user;
            jwt = jwtOption.Value;
            _user._db = userContext;
            this.userContext = userContext;
            _crud = crud;
            _utility = utility;
            this._db = _db;
            _webHostEnvironment = webHostEnvironment;
        }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);
            if (filterContext.HttpContext != null && filterContext.HttpContext.Items.ContainsKey("userToken"))
            {
                userToken = HttpContext.Items["userToken"] as TokenValidation;
            }
        }

        [Route("payment/renew/{id}")]
        [Authorize]

        public async Task<IActionResult> RenewAd(long id)
        {
            try
            {
                using var transaction = _db.Database.BeginTransaction();
                var user = await _user.getUser(userToken.UserId);
                if (user.Wallet.Amount >= (int)Prices.Renew)
                {
                    Ads elan = await _db.Set<Ads>().FindAsync(id);

                    var log = await _db.Set<Log>().FindAsync(elan.LogId);

                    log.TillDate = DateTime.UtcNow.AddMonths(1);

                    _db.Set<Ads>().Update(elan);
                    _db.Set<Log>().Update(log);

                    await _db.SaveChangesAsync();

                    user.Wallet.Amount -= (int)Prices.Renew;
                    userContext.Update(user);
                    await userContext.SaveChangesAsync();

                    await transaction.CommitAsync();
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
                Console.WriteLine(e);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("payment/premiumactivation/{id}")]
        [Authorize]

        public async Task<IActionResult> PremiumActivation(long id)
        {
            try
            {
                using var transaction = _db.Database.BeginTransaction();
                var user = await _user.getUser(userToken.UserId);
                if (user.Wallet.Amount >= (int)Prices.Premium)
                {
                    Ads elan = await _db.Set<Ads>().FindAsync(id);
                    
                    var log = await _db.Set<Log>().FindAsync(id);

                    elan.PackageId = (int)Status.AdPackage.Premium;
                    log.TillDate = DateTime.UtcNow.AddMonths(1);

                    _db.Set<Ads>().Update(elan);
                    _db.Set<Log>().Update(log);

                    await _db.SaveChangesAsync();

                    user.Wallet.Amount -= (int)Prices.Premium;
                    userContext.Update(user);
                    await userContext.SaveChangesAsync();

                    await transaction.CommitAsync();
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
