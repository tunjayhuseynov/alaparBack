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
using Microsoft.Extensions.Caching.Memory;
using System;
using AlApar.Models.Bina.Views;
using AlApar.Repositories.Common;
using AlApar.Classes.Common;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class BinaController : ControllerBase, ICommonController<ViewBinaPersonalGeneral, Form, Name>
    {
        private readonly BinaContext db;

        private readonly IUtility _utility;
        private readonly IBinaCrud _crud;
        private readonly IMemoryCache _cache;

        private record CacheNames()
        {
            public static string Filter { get => "filter"; }
        };

        private readonly IWebHostEnvironment _webHostEnvironment;

        public BinaController(IMemoryCache cache ,IUtility utility, IBinaCrud crud, BinaContext _db, IWebHostEnvironment hostEnvironment)
        {
            db = _db;
            _utility = utility;
            _crud = crud;
            _webHostEnvironment = hostEnvironment;
            _cache = cache;
        }

        //GETs
        //
        //GETs

        [Route("getAll")]
        public async Task <IEnumerable<ViewBinaPersonalGeneral>> getAll()
        {
            return await db.ViewBinaPersonalGenerals.ToListAsync();
        }

        [Route("personal/{id}")]
        public async Task<ViewBinaPersonalGeneral> getOne(int id)
        {
            return await _crud.getPersonalAd(id,db);
        }

        [Route("Filter")]
        [HttpGet]
        public async Task<object> getFilter()
        {
            object filter;

            if(!_cache.TryGetValue(CacheNames.Filter, out filter))
            {
                filter = await _crud.getForm(db);

                //_cache.Set(CacheNames.Filter, filter, TimeSpan.FromDays(1));

            }

            return filter;
        }

        [Route("Form")]
        [HttpGet]
        public async Task<object> getForm()
        {
            return await _crud.getForm(db);
        }


        //POSTs
        //
        //POSTs

        [Route("Image")]
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<object> getImage(IFormFile images)
        {
            return await _crud.saveTempImage(images, _utility, _webHostEnvironment) ?? NotFound();
        }

        [Route("Image")]
        [HttpDelete]
        public async Task<OkResult> getImage([FromBody]Name name)
        {
            await _crud.deleteTempImage(name.name, _utility, _webHostEnvironment);

            return Ok();
        }

         
        [Route("Search")]
        [HttpPost]
        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t)
        {
            return await _crud.PostFilter(res,db, s, t, _utility);
        }

        [Route("Add")]
        [HttpPost]
        public async Task<IActionResult> addToDb([FromBody] Form form)
        {
            await _crud.addToDb(form, db, _utility, _webHostEnvironment);

            return Ok();
        }


    }


}
