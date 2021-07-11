using AlApar.Classes;
using AlApar.Classes.Common;
using AlApar.Classes.Electro;
using AlApar.Models.Electro;
using AlApar.Models.Electro.Views;
using AlApar.Repositories.Common;
using AlApar.Repositories.Electro;
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
    public class ElectroController : CommonController<IElectroCrud, ElectroContext, ViewElectroAds, Form, Name, ElectroAds, ElectroContacts, ElectroLogs, ElectroCategories>
    {
        private readonly IElectroCrud _crud;
        private readonly ElectroContext _db;
        public ElectroController(ElectroContext db, IElectroCrud electroCrud, IUtility utility, IWebHostEnvironment webHostEnvironment)
        :base(electroCrud, db, utility, webHostEnvironment)
        {
            _crud = electroCrud;
            _db = db;
        }

        [Route("color/{id}")]
        public async Task<IEnumerable<ElectroPhoneColors>> getColors(int id)
        {
            return await _crud.getColors(_db, id);
        }

        [Route("storage/{id}")]
        public async Task<IEnumerable<ElectroPhoneStorages>> getStorages(int id)
        {
            return await _crud.getStorages(_db, id);
        }

    }
}
