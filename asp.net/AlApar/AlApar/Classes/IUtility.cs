using AlApar.Models.CommonModel;
using AlApar.Models.View;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace AlApar.Classes
{

    public interface IUtility
    {
        public List<string> ImageTypes { get; }
        public List<string> ImageExtensions { get; }
        public Task loadAdInstance<T>(T adInstance, long logId, int contactId, long userId) where T : class;

        /// <summary>
        /// A is Ad MC, C is Contact MC, L is Logs MC, D is DbContext, F is Form class, P is Image MC
        /// </summary>
        public Task add2Db<Ads, Contact, Logs, Context, Form, Images>(Context db, Form form, string TempFolder, string MainFolder, long userId, IWebHostEnvironment _webHostEnvironment, Func<Ads, Contact, Logs, Form, Task> extra = null)
           where Ads : class, new() // Ad Instance
           where Contact : class, new() // Contact
           where Logs : class, new() // Logs
           where Context : DbContext
           where Form : class, new() // Form class
           where Images : class, new(); // Images

        public Task update2Db<Ads, Contact, Logs, Context, Form, Images>(long id, Context db, Form form, string TempFolder, string MainFolder, long userId, IWebHostEnvironment _webHostEnvironment, Func<Ads, Contact, Logs, Form, Task> extra = null)
           where Ads : CommonAds, new() // Ad Instance
           where Contact : class, new() // Contact
           where Logs : CommonLogs, new() // Logs
           where Context : DbContext
           where Form : commonForm, new() // Form class
           where Images : CommonImages, new(); // Images

        /// <summary>
        /// F is Form class, C is DB, V is View of the MC, A is Ad MC
        /// </summary>
        public Task<object> PostFilter<Form, Context, View, Ad, Currency>(Form res, Context db, string firstSearchBy, int skip, int take, Func<Context, int?, int, int, IAsyncEnumerable<View>> query, CancellationToken cancellationToken, Func<View,Form, bool> extra = null)
           where Form : class, new()
           where Context : DbContext
           where View : class, new()
           where Ad : class, new()
           where Currency : class, TCurrency, new();

        public Size GetThumbnailSize(Image original, int maxPixel);

        public Task ImageSaver(List<ImageStructure> images, string tempFolder, string mainFolder, long folderId, IWebHostEnvironment _webHostEnvironment);

        public Task<object> SaveTempImage(IFormFile image, string TempFolder, IWebHostEnvironment _webHostEnvironment);

        public Task deleteTempImage(string name, string TempFolder, IWebHostEnvironment _webHostEnvironment);

        public Task DeleteExistImage(string path, IWebHostEnvironment webHostEnvironment);
        public T GetAttributes<T>(PropertyInfo prop) where T : Attribute;

        public bool CheckFilterProperties<Form, View, Context, Currency>(FilterCheckAttribute attr, Form form, View model, Context db, List<Currency> currencyList) 
            where Form : class where View : class where Context : DbContext where Currency : class, TCurrency, new();

        public Task<object> MainMenuStuffs<Category, View, Context, Photo>(Context context, int adListNumber) where Category : class, TCategory, new() where View : class, TView<Photo>, new() where Context : DbContext;
        public Task<object> MainMenuStuffs2<Category, View, Context, Photo>(Context context, int adListNumber) where Category : class, TCategory, new() where View : class, TView<Photo>, new() where Context : DbContext;

        public Task RotateExistImage<Context, Img>(long id, int rotation, Context db, IWebHostEnvironment _webHostEnvironment)
        where Context : DbContext
        where Img : CommonImages, new();

        public Task<object> GetView<Context, View, Photo>(Context context, long id) where Context : DbContext where View : class, TView<Photo>, new();
        public Task<bool> SetDiscount<Context, Ads>(long id, int discount, Context context) where Context : DbContext where Ads : CommonAds, new();

        public Task<object> SaveTempStory(IFormFile video, string TempFolder, IWebHostEnvironment webHostEnvironment);
        public Task<object> SaveStory<StoryModel, Context>(CommonStory story, long id, Context db, string TempFolder, string MainFolder, IWebHostEnvironment _webHostEnvironment) where StoryModel : CommonStory, new() where Context : DbContext;

        public Task<object> getVIPads<Context, View>(Context _db, int num = 8)
        where Context : DbContext
        where View : CommonViewProperities, new();
    }
}
