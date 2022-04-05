using AlApar.Classes.Job;
using AlApar.Models.Job.Views;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class JobController : CommonController<IJobCrud, JobContext, ViewJobAds, Form, ImageName, JobAd, JobContact, JobLog, JobCategory, JobEmployeePhoto, JobStory>
    {
        public JobController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IJobCrud jobCrud, JobContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache)
        : base(tokenService, user, userContext, jwtOption, jobCrud, _db, utility, webHostEnvironment, memoryCache)
        {

        }

    }

}
