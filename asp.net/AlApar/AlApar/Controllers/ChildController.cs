using AlApar.Classes;
using AlApar.Classes.Child;
using AlApar.Classes.Common;
using AlApar.Models.Child;
using AlApar.Models.Child.Views;
using AlApar.Repositories.Child;
using AlApar.Repositories.Common;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class ChildController : CommonController<IChildCrud, ChildContext, ViewChildAd, Form, Name, ChildAd, ChildContact, ChildLog, ChildCategory>
    {

        public ChildController(IChildCrud childCrud, ChildContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        : base(childCrud, _db, utility, webHostEnvironment)
        {

        }


    }
}
