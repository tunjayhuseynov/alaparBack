using AlApar.Classes;
using AlApar.Classes.Auto;
using AlApar.Classes.Common;
using AlApar.Models.Auto;
using AlApar.Models.Auto.View;
using AlApar.Repositories.Auto;
using AlApar.Repositories.Common;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class AutoController : CommonController<IAutoCrud, AutoContext, ViewAutoAds, Form, Name, AutoAds, AutoContacts, AutoAdLogs, AutoMarks>
    {
        public AutoController(IAutoCrud autoCrud, AutoContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment) :
            base(autoCrud, _db, utility, webHostEnvironment)
        {

        }

    }


}
