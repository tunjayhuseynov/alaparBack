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
    public class ElectroController : ControllerBase, ICommonController<ViewElectroAds, Form, Name>
    {
        public readonly IWebHostEnvironment _webHostEnvironment;
        public readonly ElectroContext _db;
        public readonly IUtility _utility;
        public readonly IElectroCrud _crud;
        public ElectroController(ElectroContext db, IElectroCrud electroCrud, IUtility utility, IWebHostEnvironment webHostEnvironment)
        {
            _db = db;
            _utility = utility;
            _crud = electroCrud;
            _webHostEnvironment = webHostEnvironment;
            
        }

        [Route("Add")]
        public async Task<IActionResult> addToDb([FromBody] Form form)
        {
            await _crud.addToDb(form, _db, _utility, _webHostEnvironment);

            return Ok();
        }

        public async Task<IEnumerable<ViewElectroAds>> getAll()
        {
            return await _db.ViewElectroAds.AsNoTracking().ToListAsync();
        }

        [Route("Filter")]
        public async Task<object> getFilter()
        {
            return await _crud.getForm(_db);
        }

        [Route("Form")]
        public async Task<object> getForm()
        {
            return await _crud.getForm(_db);
        }

        [Route("Image")]
        public async Task<object> getImage(IFormFile images)
        {
            return await _crud.saveTempImage(images, _utility, _webHostEnvironment);
        }

        [Route("Image")]
        [HttpDelete]
        public async Task<OkResult> deleteImage([FromBody] Name name)
        {
            await _crud.deleteTempImage(name.name, _utility, _webHostEnvironment);

            return Ok();
        }

        [Route("get/{id}")]
        public async Task<ViewElectroAds> getOne(int id)
        {
            return await _crud.getPersonalAd(id, _db);
        }

        private Func<ElectroContext, int?, int, int, IAsyncEnumerable<ViewElectroAds>> query = EF.CompileAsyncQuery((ElectroContext db, int? id, int skip, int take) => db.ViewElectroAds.Include(w => w.Images).AsNoTracking().Where(w => w.CateogryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        [HttpPost]
        [Route("Search")]
        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t)
        {
            return await _crud.PostFilter(res, _db, "CateogryId", s, t, _utility, query);
        }

        //Addition

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
