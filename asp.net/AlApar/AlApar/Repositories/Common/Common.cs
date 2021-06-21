using AlApar.Classes;
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
    public class Common<View, Context, Form, ModelAd, Log, Contact, Photos> : ICommon<View, Context, Form, ModelAd, Contact, Log>
        where View : class, new()
        where Context : DbContext
        where Form : class, new()
        where ModelAd : class, new()
        where Log : class, new()
        where Contact : class, new()
        where Photos : class, new()
    {
        public virtual string TempFolder => throw new NotImplementedException();

        public virtual string MainFolder => throw new NotImplementedException();

        public virtual async Task addToDb(Form form, Context db, IUtility utility, IWebHostEnvironment _webHostEnvironment, Func<ModelAd, Contact, Log, Form, Task> action = null)
        {
            await utility.add2Db<ModelAd, Contact, Log, Context, Form, Photos>
                    (db, form, "PersonalContactId", TempFolder, MainFolder, _webHostEnvironment, action);
        }

        public virtual async Task deleteTempImage(string name, IUtility utility, IWebHostEnvironment _webHostEnvironment)
        {
            await utility.deleteTempImage(name, TempFolder, _webHostEnvironment);
        }

        public virtual Task<object> getForm(Context db)
        {
            throw new NotImplementedException();
        }

        public virtual Task<View> getPersonalAd(int id, Context db)
        {
            throw new NotImplementedException();
        }


        public virtual async Task<object> PostFilter(Form res, Context db, string firstSearchBy, int skip, int take, IUtility utility, Func<Context, int?, int, int, IAsyncEnumerable<View>> query, Func<View, bool> extra = null)
        {
            return await utility.PostFilter<Form, Context, View, ModelAd>
               (res, db, firstSearchBy, skip, take, query, extra);
        }

        public virtual async Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment)
        {
            return await _utility.SaveTempImage(image, TempFolder, _webHostEnvironment);
        }
    }
}
