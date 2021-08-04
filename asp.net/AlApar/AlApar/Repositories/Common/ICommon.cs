using AlApar.Classes;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Common
{
    /// <summary>
    /// T is View, C is Context, F is Form
    /// </summary>
    /// <typeparam name="View"></typeparam>
    /// <typeparam name="Context"></typeparam>
    /// <typeparam name="Form"></typeparam>
    public interface ICommon<View,Context,Form,ModelAd,Contact, Log, Category>
    {
        string TempFolder { get; }
        string MainFolder { get; }

        Func<Context, int?, int, int, IAsyncEnumerable<View>> FilterQuery { get; }
        Func<View, Form, bool> extra { get; }
        // GET 
        public Task<object> getForm(Context db);
        public Task<object> getAd(IUtility utility, long id, Context db);

        // POST
        public Task<object> PostFilter(Form res, Context db, string firstSearchBy, int skip, int take, IUtility utility);
        public Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment);
        public Task addToDb(Form form, Context db, IUtility utility, IWebHostEnvironment _webHostEnvironment, Func<ModelAd, Contact, Log, Form, Task> action = null);

        // DELETE
        public Task deleteTempImage(string name, IUtility utility, IWebHostEnvironment _webHostEnvironment);

        //Menu
        public Task<object> getMainMenuStuffs(IUtility utility, Context context, int adListNumber);
    }
}
