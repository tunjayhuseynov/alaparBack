using AlApar.Classes.Service;


namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class ServiceController : CommonController<IServiceCrud, ServiceContext, ViewServiceAd, Form, ImageName, ServiceAd, ServiceContact, ServiceLog, ServiceCategory, ServicePhoto, ServiceStory>
    {
        public ServiceController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IServiceCrud serviceCrud, ServiceContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache)
        : base(tokenService, user, userContext, jwtOption, serviceCrud, _db, utility, webHostEnvironment, memoryCache)
        {

        }

    }
}
