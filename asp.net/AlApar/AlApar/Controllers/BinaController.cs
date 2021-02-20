using System.Collections.Generic;
using AlApar.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using AlApar.Classes.Bina;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using AlApar.Repositories;
using AlApar.Repositories.Bina;
using AlApar.Classes;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class BinaController : Controller
    {
        private readonly alAparContext db;

        private readonly IUtility _utility;
        private readonly IBinaFilter _filter;
        private readonly IBinaCrud _crud;

        private readonly IWebHostEnvironment _webHostEnvironment;

        public BinaController(IUtility utility, IBinaFilter filter, IBinaCrud crud, alAparContext _db, IWebHostEnvironment hostEnvironment)
        {
            db = _db;
            _utility = utility;
            _crud = crud;
            _filter = filter;
            _webHostEnvironment = hostEnvironment;
        }

        //GETs
        //
        //GETs

        [Route("getAll")]
        public async Task <IEnumerable<BinaAdsPersonal>> getAll()
        {
            return await db.BinaAdsPersonal.ToListAsync();
        }

        [Route("get/{id}")]
        public async Task<BinaAdsPersonal> get(int id)
        {
            return await db.BinaAdsPersonal.FindAsync(id);
        }

        [Route("Filter")]
        [HttpGet]
        public async Task<object> getFilter()
        {
            return await _filter.Get(db);
        }

        [Route("Image")]
        [HttpPost]
        [Produces("application/json")]
        [Consumes("multipart/form-data")]
        public async Task<object> getImage(IFormFile images)
        {
            return await _crud.saveTempImage(images, _utility, _webHostEnvironment) ?? NotFound();
        }

        [Route("Form")]
        [HttpGet]
        public async Task<object> getForm()
        {
            return await _crud.getForm(db);
        }

        [Route("personal/{id}")]
        [HttpGet]
        public async Task<object> getPersonalAd(int id)
        {
            return await _crud.getPersonalAd(id, db);
        }


        //POSTs
        //
        //POSTs

        [Route("Search")]
        [HttpPost]
        public async Task<object> postFilter([FromBody] filterResponse res)
        {
            return await _filter.Post(res,db);
        }

        [Route("Add")]
        [HttpPost]
        public async Task<IActionResult> addToDb([FromBody] Form form)
        {
            await _crud.addToDb(form, db, _webHostEnvironment);

            return Ok();
        }

    }
}
