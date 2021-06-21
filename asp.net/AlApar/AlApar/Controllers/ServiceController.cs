using AlApar.Classes;
using AlApar.Classes.Common;
using AlApar.Classes.Service;
using AlApar.Models.Service;
using AlApar.Models.Service.Views;
using AlApar.Repositories.Common;
using AlApar.Repositories.Service;
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
    public class ServiceController : ControllerBase, ICommonController<ViewServiceAd, Form, Name>
    {
        private readonly IServiceCrud _crud;
        private readonly IUtility _utility;
        private readonly ServiceContext _db;

        private readonly IWebHostEnvironment _webHostEnvironment;
        public ServiceController(IServiceCrud serviceCrud, ServiceContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        {
            _crud = serviceCrud;
            _utility = utility;
            this._db = _db;
            _webHostEnvironment = webHostEnvironment;
        }

        [Route("Add")]
        public async Task<IActionResult> addToDb([FromBody] Form form)
        {
            await _crud.addToDb(form, _db, _utility, _webHostEnvironment);

            return Ok();
        }

        public async Task<IEnumerable<ViewServiceAd>> getAll()
        {
            return await _db.ViewServiceAds.AsNoTracking().ToListAsync();
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
        public async Task<ViewServiceAd> getOne(int id)
        {
            return await _crud.getPersonalAd(id, _db);
        }

        private Func<ServiceContext, int?, int, int, IAsyncEnumerable<ViewServiceAd>> query = EF.CompileAsyncQuery((ServiceContext db, int? id, int skip, int take) => db.ViewServiceAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        [HttpPost]
        [Route("Search")]
        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t)
        {
            return await _crud.PostFilter(res, _db, "CateogryId", s, t, _utility, query);
        }
    }
}
