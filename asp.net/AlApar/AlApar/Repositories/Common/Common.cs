using AlApar.Models.CommonModel;
using AlApar.Models.View;

namespace AlApar.Repositories.Common
{/// <summary>
/// T is View, C is Context, F is Form, A is Main Model, Log is Log Model, Contact == Contact Model
/// </summary>
/// <typeparam name="View"></typeparam>
/// <typeparam name="Context"></typeparam>
/// <typeparam name="Form"></typeparam>
/// <typeparam name="ModelAd"></typeparam>
/// <typeparam name="L"></typeparam>
    public abstract class Common<View, Context, Form, ModelAd, Log, Contact, Photos, Category, StoryModel> : ICommon<View, Context, Form, ModelAd, Contact, Log, Category, StoryModel>
        where View : CommonViewProperities, TView<Photos>, new()
        where Context : DbContext
        where Form : commonForm, new()
        where ModelAd : CommonAds, new()
        where Log : CommonLogs, new()
        where Contact : class, new()
        where Photos : CommonImages, new()
        where Category : class, TCategory ,new()
        where StoryModel : CommonStory, new()
    {
        public virtual string TempFolder => throw new NotImplementedException();

        public virtual string MainFolder => throw new NotImplementedException();
        public virtual Func<Context, int?, int, int, IAsyncEnumerable<View>> FilterQuery => throw new NotImplementedException();
        public virtual Func<View, Form, bool> extra => null;

        public virtual async Task addToDb(Form form, Context db, IUtility utility, long userId, IWebHostEnvironment _webHostEnvironment, Func<ModelAd, Contact, Log, Form, Task> action = null)
        {
            await utility.add2Db<ModelAd, Contact, Log, Context, Form, Photos>
                    (db, form, TempFolder, MainFolder, userId, _webHostEnvironment, action);
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

        public virtual async Task<object> getMainMenuStuffs2(IUtility utility, Context context, int adListNumber)
        {
            return await utility.MainMenuStuffs2<Category, View, Context, Photos>(context, adListNumber);
        }

        public virtual async Task<object> getAd(IUtility utility, long id, Context db)
        {
            return await utility.GetView<Context, View, Photos>(db, id);
        }


        public virtual async Task<object> PostFilter(Form res, Context db, string firstSearchBy, int skip, int take, IUtility utility, CancellationToken cancellationToken)
        {
            return await utility.PostFilter<Form, Context, View, ModelAd, Currency>
               (res, db, firstSearchBy, skip, take, FilterQuery, cancellationToken, extra);
        }

        public virtual async Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment)
        {
            return await _utility.SaveTempImage(image, TempFolder, _webHostEnvironment);
        }

        public virtual async Task<bool> SetDiscount(long id, int discount, Context context, IUtility utility)
        {
            return await utility.SetDiscount<Context, ModelAd>(id, discount, context);
        }

        public virtual async Task update2Db(long id, Form form, Context db, IUtility utility, long userId, IWebHostEnvironment _webHostEnvironment, Func<ModelAd, Contact, Log, Form, Task> action = null)
        {
            try
            {
                await utility.update2Db<ModelAd, Contact, Log, Context, Form, Photos>(id, db, form, TempFolder, MainFolder, userId, _webHostEnvironment);

            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<object> SaveTempVideo(IFormFile video, IUtility utility, IWebHostEnvironment _webHostEnvironment)
        {
            return await utility.SaveTempStory(video, TempFolder, _webHostEnvironment);
        }

        public async Task<object> SaveStory(CommonStory story, long id, Context db, IUtility utility, IWebHostEnvironment _webHostEnvironment)
        {
            return await utility.SaveStory<StoryModel, Context>(story, id, db, TempFolder, MainFolder, _webHostEnvironment);
        }

        public async Task<object> GetVips(Context db, IUtility utility, int num = 8)
        {
            return await utility.getVIPads<Context, View>(db, num);
        }
    }
}
