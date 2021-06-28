using AlApar.Models.Job;
using AlApar.Repositories.Common;
using Microsoft.AspNetCore.Mvc;
using AlApar.Classes.Job;
using AlApar.Classes.Common;
using AlApar.Classes;
using Microsoft.AspNetCore.Hosting;
using AlApar.Repositories.Job;
using AlApar.Models.Job.Views;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class JobController : CommonController<IJobCrud, JobContext, ViewJobAds, Form, Name, JobAd, JobContact, JobLog, JobCategory>
    {
        public JobController(IJobCrud jobCrud, JobContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        : base(jobCrud, _db, utility, webHostEnvironment)
        {

        }

    }

}
