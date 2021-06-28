using AlApar.Classes;
using AlApar.Classes.Animal;
using AlApar.Classes.Common;
using AlApar.Models.Animal;
using AlApar.Models.Animal.View;
using AlApar.Repositories.Animal;
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
    public class AnimalController : CommonController<IAnimalCrud, AnimalContext, ViewAnimalAd, Form, Name, AnimalAd, AnimalContact, AnimalLog, AnimalCategory>
    {
        public AnimalController(IAnimalCrud animalCrud, AnimalContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment) :
            base(animalCrud, _db, utility, webHostEnvironment )
        {

        }


    }
}
