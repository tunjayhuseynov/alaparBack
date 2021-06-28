using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace AlApar.Classes
{

    public interface IUtility
    {
        public List<string> ImageTypes { get; }
        public Task loadAdInstance<T>(T adInstance, int logId, int contactId) where T : class;

        /// <summary>
        /// A is Ad MC, C is Contact MC, L is Logs MC, D is DbContext, F is Form class, P is Image MC
        /// </summary>
        public Task add2Db<A, C, L, D, F, P>(D db, F form, string TempFolder, string MainFolder, IWebHostEnvironment _webHostEnvironment, Func<A, C, L, F, Task> extra = null)
           where A : class, new() // Ad Instance
           where C : class, new() // Contact
           where L : class, new() // Logs
           where D : DbContext
           where F : class, new() // Form class
           where P : class, new(); // Images

        /// <summary>
        /// F is Form class, C is DB, V is View of the MC, A is Ad MC
        /// </summary>
        public Task<object> PostFilter<Form, Context, View, Ad, Currency>(Form res, Context db, string firstSearchBy, int skip, int take, Func<Context, int?, int, int, IAsyncEnumerable<View>> query, Func<View,Form, bool> extra = null)
           where Form : class, new()
           where Context : DbContext
           where View : class, new()
           where Ad : class, new()
           where Currency : class, TCurrency, new();

        public Size GetThumbnailSize(Image original);

        public Task ImageSaver(List<string> images, string tempFolder, string mainFolder, int folderId, IWebHostEnvironment _webHostEnvironment);

        public Task<object> SaveTempImage(IFormFile image, string TempFolder, IWebHostEnvironment _webHostEnvironment);

        public Task deleteTempImage(string name, string TempFolder, IWebHostEnvironment _webHostEnvironment);

        public T GetAttributes<T>(PropertyInfo prop) where T : Attribute;

        public bool CheckFilterProperties<Form, View, Context, Currency>(FilterCheckAttribute attr, Form form, View model, Context db, List<Currency> currencyList) 
            where Form : class where View : class where Context : DbContext where Currency : class, TCurrency, new();

        public Task<object> MainMenuStuffs<Category, View, Context, Photo>(Context context, int adListNumber) where Category : class, TCategory, new() where View : class, TView<Photo>, new() where Context : DbContext;
    }
}
