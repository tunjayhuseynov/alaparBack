using AlApar.Models.Job;
using AlApar.Repositories.Common;
using Microsoft.AspNetCore.Mvc;
using AlApar.Classes.Job;
using AlApar.Classes.Common;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using AlApar.Classes;
using Microsoft.AspNetCore.Hosting;
using AlApar.Repositories.Job;
using System;
using AlApar.Models.Job.Views;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class JobController : ControllerBase, ICommonController<ViewJobAds, Form, Name>
    {
        private readonly IJobCrud _crud;
        private readonly IUtility _utility;
        private readonly JobContext db;

        private readonly IWebHostEnvironment _webHostEnvironment;
        public JobController(IJobCrud autoCrud, JobContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        {
            _crud = autoCrud;
            _utility = utility;
            db = _db;
            _webHostEnvironment = webHostEnvironment;
        }

        [Route("Add")]
        [HttpPost]
        public async Task<IActionResult> addToDb([FromBody] Form form)
        {
            await _crud.addToDb(form, db, _utility, _webHostEnvironment);

            return Ok();
        }

        [Route("Image")]
        [HttpDelete]
        public async Task<OkResult> deleteImage([FromBody] Name name)
        {
            await _crud.deleteTempImage(name.name, _utility, _webHostEnvironment);

            return Ok();
        }

        [Route("getAll")]

        public async Task<IEnumerable<ViewJobAds>> getAll()
        {
            return await db.ViewJobAds.AsNoTracking().ToListAsync();
        }

        [Route("Filter")]
        public async Task<object> getFilter()
        {
            return await _crud.getForm(db);
        }

        [Route("Form")]
        public async Task<object> getForm()
        {
            return await _crud.getForm(db);
        }

        [Route("Image")]
        [HttpPost]
        [Produces("application/json")]
        [Consumes("multipart/form-data")]
        public async Task<object> getImage(IFormFile images)
        {
            return await _crud.saveTempImage(images, _utility, _webHostEnvironment) ?? NotFound();
        }

        [Route("get/{id}")]

        public async Task<ViewJobAds> getOne(int id)
        {
            return await _crud.getPersonalAd(id, db);
        }

        private Func<JobContext, int?, int, int, IAsyncEnumerable<ViewJobAds>> query = EF.CompileAsyncQuery((JobContext db, int? id, int skip, int take) => db.ViewJobAds.Include(w => w.Images).AsNoTracking().Where(w => w.TypeId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t)
        {
            return await _crud.PostFilter(res, db, "TypeId", s, t, _utility, query);
        }
    }

}
