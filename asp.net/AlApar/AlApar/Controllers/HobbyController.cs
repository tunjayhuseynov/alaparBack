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
    public class HobbyController : ControllerBase, ICommonController<ViewHobbyAd, Form, Name>
    {
        private readonly IHobbyCrud _crud;
        private readonly IUtility _utility;
        private readonly HobbyContext _db;

        private readonly IWebHostEnvironment _webHostEnvironment;
        public HobbyController(IHobbyCrud hobbyCrud, HobbyContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        {
            _crud = hobbyCrud;
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

        public async Task<IEnumerable<ViewHobbyAd>> getAll()
        {
            return await _db.ViewHobbyAds.AsNoTracking().ToListAsync();
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
        public async Task<ViewHobbyAd> getOne(int id)
        {
            return await _crud.getPersonalAd(id, _db);
        }

        private Func<HobbyContext, int?, int, int, IAsyncEnumerable<ViewHobbyAd>> query = EF.CompileAsyncQuery((HobbyContext db, int? id, int skip, int take) => db.ViewHobbyAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        [HttpPost]
        [Route("Search")]
        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t)
        {
            return await _crud.PostFilter(res, _db, "CateogryId", s, t, _utility, query);
        }
    }
}
