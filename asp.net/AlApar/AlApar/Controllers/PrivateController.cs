using AlApar.Repositories.Common;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlApar.Models.Private.View;
using AlApar.Models.Private;
using AlApar.Classes.Private;
using AlApar.Classes.Common;
using AlApar.Repositories.Private;
using AlApar.Classes;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class PrivateController : CommonController<IPrivateCrud, PrivateContext, ViewPrivateAd, Form, Name, PrivateAd, PrivateContact, PrivateLog, PrivateCategory>
    {
        public PrivateController(IPrivateCrud privateCrud, PrivateContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        : base(privateCrud, _db, utility, webHostEnvironment)
        {

        }

    }
}
