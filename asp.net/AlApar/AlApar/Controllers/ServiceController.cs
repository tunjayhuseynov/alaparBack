using AlApar.Classes;
using AlApar.Classes.Common;
using AlApar.Classes.Service;
using AlApar.Models.Service;
using AlApar.Models.Service.Views;
using AlApar.Repositories.Common;
using AlApar.Repositories.Service;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class ServiceController : CommonController<IServiceCrud, ServiceContext, ViewServiceAd, Form, Name, ServiceAd, ServiceContact, ServiceLog, ServiceCategory>
    {
        public ServiceController(IServiceCrud serviceCrud, ServiceContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        : base(serviceCrud, _db, utility, webHostEnvironment)
        {

        }

    }
}
