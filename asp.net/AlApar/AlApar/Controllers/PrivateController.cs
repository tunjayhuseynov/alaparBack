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
    public class PrivateController : ControllerBase, ICommonController<ViewPrivateAd, Form, Name>
    {
        private readonly IPrivateCrud _crud;
        private readonly IUtility _utility;
        private readonly PrivateContext _db;

        private readonly IWebHostEnvironment _webHostEnvironment;
        public PrivateController(IPrivateCrud privateCrud, PrivateContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        {
            _crud = privateCrud;
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

        public async Task<IEnumerable<ViewPrivateAd>> getAll()
        {
            return await _db.ViewPrivateAds.AsNoTracking().ToListAsync();
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
        public async Task<ViewPrivateAd> getOne(int id)
        {
            return await _crud.getPersonalAd(id, _db);
        }

        private Func<PrivateContext, int?, int, int, IAsyncEnumerable<ViewPrivateAd>> query = EF.CompileAsyncQuery((PrivateContext db, int? id, int skip, int take) => db.ViewPrivateAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        [HttpPost]
        [Route("Search")]
        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t)
        {
            return await _crud.PostFilter(res, _db, "CateogryId", s, t, _utility, query);
        }
    }
}
