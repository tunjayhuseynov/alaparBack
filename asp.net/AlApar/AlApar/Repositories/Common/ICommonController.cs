using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using FromBodyAttribute = Microsoft.AspNetCore.Mvc.FromBodyAttribute;
using OkResult = Microsoft.AspNetCore.Mvc.OkResult;
using System.Threading;
using AlApar.Models.CommonModel;

namespace AlApar.Repositories.Common
{
    /// <summary>
    /// V is View, F is Form, M is Name class for image
    /// </summary>
    /// <typeparam name="View"></typeparam>
    /// <typeparam name="Form"></typeparam>
    /// <typeparam name="M"></typeparam>
    interface ICommonController<View, Form, M>
    {
        public Task<IEnumerable<View>> getAll();
        public Task<object> getOne(long id);
        public Task<object> getFilter();
        public Task<object> getForm();
        public Task<object> getImage(IFormFile images);
        public Task<OkResult> deleteImage([FromBody] M name);
        public Task<object> postFilter([FromBody] Form res, [FromQuery] int s, [FromQuery] int t, CancellationToken cancellationToken);
        public Task<IActionResult> addToDb([FromBody] Form form);
        public Task<IActionResult> saveViewer(long id);
        public Task<IActionResult> getVIPads([FromQuery] int num = 8);
        public Task<object> getMainMenu([FromQuery] int num = 4);
        public Task<object> getMainMenu2([FromQuery] int num = 24);
        public Task<IActionResult> SetDiscount(long id, int discount);
        public Task<IActionResult> Edit([FromBody] Form form, long id);
        public Task<IActionResult> EditAd(long id);
        public Task<IActionResult> SaveTempVideo(IFormFile video);
        public Task<IActionResult> SaveStory([FromBody] CommonStory story);

    }
}
