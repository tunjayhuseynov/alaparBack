using AlApar.Classes;
using AlApar.Classes.Common;
using AlApar.Classes.Home;
using AlApar.Models.Home;
using AlApar.Models.Home.View;
using AlApar.Repositories.Common;
using AlApar.Repositories.Home;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class HomeController : CommonController<IHomeCrud, HomeContext, ViewHomeAd, Form, Name, HomeAd, HomeContact, HomeLog, HomeCategory>
    {
        public HomeController(IHomeCrud homeCrud, HomeContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        : base(homeCrud, _db, utility, webHostEnvironment)
        {

        }
       
    }
}
