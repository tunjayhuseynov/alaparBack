using AlApar.Classes.Auto;
using AlApar.Models.Auto.View;


namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class AutoController : CommonController<IAutoCrud, AutoContext, ViewAutoAds, Form, ImageName, AutoAds, AutoContacts, AutoAdLogs, AutoTypes, AutoPhotos, AutoStory>
    {
        public AutoController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IAutoCrud autoCrud, AutoContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache) :
            base(tokenService, user, userContext, jwtOption, autoCrud, _db, utility, webHostEnvironment, memoryCache)
        {

        }

    }


}
