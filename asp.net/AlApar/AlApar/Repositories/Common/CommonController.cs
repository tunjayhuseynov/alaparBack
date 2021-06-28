using AlApar.Classes;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AlApar.Repositories.Common
{
    public abstract class CommonController<ICrud, Context, View, Form, Name, Ads, Contact, Log, Category> : ControllerBase, ICommonController<View, Form, Name>
        where ICrud : ICommon<View, Context, Form, Ads, Contact, Log, Category>
        where Context: DbContext
        where View : class, new()
        where Form : class, new()
        where Name : Classes.Common.Name, new()
        where Ads : class, new()
        where Contact : class, new()
        where Log : class, new()
        
    {
        private readonly ICrud _crud;
        private readonly IUtility _utility;
        private readonly Context _db;

        private readonly IWebHostEnvironment _webHostEnvironment;
        public CommonController(ICrud crud, Context _db, IUtility utility, IWebHostEnvironment webHostEnvironment)
        {
            _crud = crud;
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
        public async Task<View> getOne(int id)
        {
            return await _crud.getPersonalAd(id, _db);
        }


        [HttpPost]
        [Route("Search")]
        public async Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t)
        {
            return await _crud.PostFilter(res, _db, "CategoryId", s, t, _utility);
        }

        [Route("mainmenu")]
        public async Task<object> getMainMenu([FromQuery] int num = 4)
        {
            return await _crud.getMainMenuStuffs(_utility, _db, num);
        }

        public Task<IEnumerable<View>> getAll()
        {
            throw new NotImplementedException();
        }
    }
}
