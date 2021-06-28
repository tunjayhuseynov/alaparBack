using AlApar.Classes;
using AlApar.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Common
{/// <summary>
/// T is View, C is Context, F is Form, A is Main Model, Log is Log Model, Contact == Contact Model
/// </summary>
/// <typeparam name="View"></typeparam>
/// <typeparam name="Context"></typeparam>
/// <typeparam name="Form"></typeparam>
/// <typeparam name="ModelAd"></typeparam>
/// <typeparam name="L"></typeparam>
    public abstract class Common<View, Context, Form, ModelAd, Log, Contact, Photos, Category> : ICommon<View, Context, Form, ModelAd, Contact, Log, Category>
        where View : class, TView<Photos>, new()
        where Context : DbContext
        where Form : class, new()
        where ModelAd : class, new()
        where Log : class, new()
        where Contact : class, new()
        where Photos : class, new()
        where Category : class, TCategory ,new()
    {
        public virtual string TempFolder => throw new NotImplementedException();

        public virtual string MainFolder => throw new NotImplementedException();
        public virtual Func<Context, int?, int, int, IAsyncEnumerable<View>> FilterQuery => throw new NotImplementedException();
        public virtual Func<View, Form, bool> extra => null;

        public virtual async Task addToDb(Form form, Context db, IUtility utility, IWebHostEnvironment _webHostEnvironment, Func<ModelAd, Contact, Log, Form, Task> action = null)
        {
            await utility.add2Db<ModelAd, Contact, Log, Context, Form, Photos>
                    (db, form, TempFolder, MainFolder, _webHostEnvironment, action);
        }

        public virtual async Task deleteTempImage(string name, IUtility utility, IWebHostEnvironment _webHostEnvironment)
        {
            await utility.deleteTempImage(name, TempFolder, _webHostEnvironment);
        }

        public virtual Task<object> getForm(Context db)
        {
            throw new NotImplementedException();
        }

        public virtual async Task<object> getMainMenuStuffs(IUtility utility, Context context, int adListNumber)
        {
            return await utility.MainMenuStuffs<Category, View, Context, Photos>(context, adListNumber);
        }

        public virtual Task<View> getPersonalAd(int id, Context db)
        {
            throw new NotImplementedException();
        }


        public virtual async Task<object> PostFilter(Form res, Context db, string firstSearchBy, int skip, int take, IUtility utility)
        {
            return await utility.PostFilter<Form, Context, View, ModelAd, Currency>
               (res, db, firstSearchBy, skip, take, FilterQuery, extra);
        }

        public virtual async Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment)
        {
            return await _utility.SaveTempImage(image, TempFolder, _webHostEnvironment);
        }
    }
}
