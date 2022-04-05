using AlApar.Classes.Hobby;
using AlApar.Models.Hobby.Views;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class HobbyController : CommonController<IHobbyCrud, HobbyContext, ViewHobbyAd, Form, ImageName, HobbyAd, HobbyContact, HobbyLog, HobbyCategory, HobbyPhoto, HobbyStory>
    {

        public HobbyController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IHobbyCrud hobbyCrud, HobbyContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache)
        : base(tokenService, user, userContext, jwtOption, hobbyCrud, _db, utility, webHostEnvironment, memoryCache)
        {

        }
      
    }
}
