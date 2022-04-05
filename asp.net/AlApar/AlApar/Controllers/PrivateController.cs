using AlApar.Models.Private.View;
using AlApar.Classes.Private;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class PrivateController : CommonController<IPrivateCrud, PrivateContext, ViewPrivateAd, Form, ImageName, PrivateAd, PrivateContact, PrivateLog, PrivateCategory, PrivatePhoto, PrivateStory>
    {
        public PrivateController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IPrivateCrud privateCrud, PrivateContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache)
        : base(tokenService, user, userContext, jwtOption, privateCrud, _db, utility, webHostEnvironment, memoryCache)
        {

        }

    }
}
