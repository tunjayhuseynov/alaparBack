using AlApar.Classes;
using AlApar.Classes.Common;
using AlApar.Classes.Hobby;
using AlApar.Models.Hobby;
using AlApar.Models.Hobby.Views;
using AlApar.Repositories.Common;
using AlApar.Repositories.Hobby;
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
    public class HobbyController : CommonController<IHobbyCrud, HobbyContext, ViewHobbyAd, Form, Name, HobbyAd, HobbyContact, HobbyLog, HobbyCategory>
    {

        public HobbyController(IHobbyCrud hobbyCrud, HobbyContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        : base(hobbyCrud, _db, utility, webHostEnvironment)
        {

        }
      
    }
}
