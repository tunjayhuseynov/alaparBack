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
    public interface ICommon<View,Context,Form,ModelAd,Contact, Log>
    {
        string TempFolder { get; }
        string MainFolder { get; }
        
        // GET 
        public Task<object> getForm(Context db);
        public Task<View> getPersonalAd(int id, Context db);

        // POST
        public Task<object> PostFilter(Form res, Context db, string firstSearchBy, int skip, int take, IUtility utility, Func<Context, int?, int, int, IAsyncEnumerable<View>> query, Func<View, bool> extra = null);
        public Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment);
        public Task addToDb(Form form, Context db, IUtility utility, IWebHostEnvironment _webHostEnvironment, Func<ModelAd, Contact, Log, Form, Task> action = null);

        // DELETE
        public Task deleteTempImage(string name, IUtility utility, IWebHostEnvironment _webHostEnvironment);

    }
}
