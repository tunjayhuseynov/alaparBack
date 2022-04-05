using AlApar.Classes.Bina;
using AlApar.Models.Bina.Views;
using AlApar.Models.Bina;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]

    public class BinaController : CommonController<IBinaCrud, BinaContext, ViewBinaPersonalGeneral, Form, ImageName, BinaAds, BinaContacts, BinaAdsLogs, BinaCategories, BinaPhotos, BinaStory>
    {
        public BinaController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IBinaCrud crud, BinaContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache) : 
            base(tokenService, user, userContext, jwtOption, crud, _db, utility, webHostEnvironment, memoryCache)
        {
        }

    }

}
