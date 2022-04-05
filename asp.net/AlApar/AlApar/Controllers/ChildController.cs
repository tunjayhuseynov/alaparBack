using AlApar.Classes.Child;
using AlApar.Models.Child.Views;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class ChildController : CommonController<IChildCrud, ChildContext, ViewChildAd, Form, ImageName, ChildAd, ChildContact, ChildLog, ChildCategory, ChildPhoto, ChildStory>
    {

        public ChildController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IChildCrud childCrud, ChildContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache)
        : base(tokenService, user, userContext, jwtOption, childCrud, _db, utility, webHostEnvironment, memoryCache)
        {

        }


    }
}
