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
using AlApar.Models.Bina;
using System.Linq;

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
        public async Task<OkResult> deleteImage([FromBody]Name name)
        {
            await _crud.deleteTempImage(name.name, _utility, _webHostEnvironment);

            return Ok();
        }


        private Func<BinaContext, int?, int, int, IAsyncEnumerable<ViewBinaPersonalGeneral>> query = EF.CompileAsyncQuery((BinaContext db, int? id, int skip, int take) => db.ViewBinaPersonalGenerals.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));


        [Route("Search")]
        [HttpPost]
        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t)
        {
            Func<ViewBinaPersonalGeneral, bool> extra = (item) =>
            {
                int placement = _crud.FloorPlace(item);

                if (res.Bottomfloor == true || res.Middlefloor == true || res.Upperfloor == true)
                {
                    if (res.Bottomfloor != true && placement == -1) return false;
                    if (res.Middlefloor != true && placement == 0) return false;
                    if (res.Upperfloor != true && placement == 1) return false;
                }

                return true;
            };

            return await _crud.PostFilter(res,db, "CategoryId" ,s, t, _utility, query, extra);
        }

        [Route("Add")]
        [HttpPost]
        public async Task<IActionResult> addToDb([FromBody] Form form)
        {
            Func<BinaAdsPersonal, BinaPersonalContacts, BinaAdsPersonalLogs, Form, Task> action = async (ad, contact, logs, form) => {

                if (form.VillageId != null)
                {
                    ad.Adress = $"{(await db.Villages.FindAsync(form.VillageId)).Name.TrimEnd()}, {(await db.Regions.FindAsync(form.RegionId)).Name.TrimEnd()}";
                }
                else if (form.RegionId != null)
                {
                    ad.Adress = $"{(await db.Regions.FindAsync(form.RegionId)).Name.TrimEnd()}, {(await db.Cities.FindAsync(form.CityId)).Name.TrimEnd()}";
                }
                else
                {
                    ad.Adress = $"{(await db.Cities.FindAsync(form.CityId)).Name.TrimEnd()}";
                }

            };

            await _crud.addToDb(form, db, _utility, _webHostEnvironment, action);

            return Ok();
        }


    }


}
