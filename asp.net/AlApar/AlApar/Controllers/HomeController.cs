using AlApar.Classes;
using AlApar.Classes.Common;
using AlApar.Classes.Home;
using AlApar.Models;
using AlApar.Models.Electro;
using AlApar.Models.Home;
using AlApar.Models.Home.View;
using AlApar.Repositories.Common;
using AlApar.Repositories.Home;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class HomeController : ControllerBase, ICommonController<ViewHomeAd, Form, Name>
    {
        private readonly IHomeCrud _crud;
        private readonly IUtility _utility;
        private readonly HomeContext _db;

        private readonly IWebHostEnvironment _webHostEnvironment;
        public HomeController(IHomeCrud homeCrud, HomeContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        {
            _crud = homeCrud;
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

        public async Task<IEnumerable<ViewHomeAd>> getAll()
        {
            return await _db.ViewHomeAds.AsNoTracking().ToListAsync();
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
        public async Task<ViewHomeAd> getOne(int id)
        {
            return await _crud.getPersonalAd(id, _db);
        }

        private Func<HomeContext, int?, int, int, IAsyncEnumerable<ViewHomeAd>> query = EF.CompileAsyncQuery((HomeContext db, int? id, int skip, int take) => db.ViewHomeAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        [HttpPost]
        [Route("Search")]
        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t)
        {
            return await _crud.PostFilter(res, _db, "CateogryId", s, t, _utility, query);
        }
    }
}
