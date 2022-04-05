using AlApar.Classes.Home;
using AlApar.Models.Home.View;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class HomeController : CommonController<IHomeCrud, HomeContext, ViewHomeAd, Form, ImageName, HomeAd, HomeContact, HomeLog, HomeCategory, HomePhoto, HomeStory>
    {
        public HomeController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IHomeCrud homeCrud, HomeContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache)
        : base(tokenService, user, userContext, jwtOption, homeCrud, _db, utility, webHostEnvironment, memoryCache)
        {

        }
       
    }
}
