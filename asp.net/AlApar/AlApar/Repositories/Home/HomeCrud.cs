using AlApar.Classes.Home;
using AlApar.Models.Home;
using AlApar.Models.Home.View;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Home
{
    public class HomeCrud : Common<ViewHomeAd, HomeContext, Form, HomeAd, HomeLog, HomeContact, HomePhoto, HomeCategory>, IHomeCrud
    {
        public override string TempFolder => "images/home/temporarily";
        public override string MainFolder => "images/home/personal";

        public override Func<HomeContext, int?, int, int, IAsyncEnumerable<ViewHomeAd>> FilterQuery => EF.CompileAsyncQuery((HomeContext db, int? id, int skip, int take) => db.ViewHomeAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));
        public override async Task<object> getForm(HomeContext db)
        {
            var category = await db.HomeCategories.ToListAsync();

            var type = await db.HomeTypes.ToListAsync();

            var cities = await db.Cities.ToListAsync();

            var currency = await db.Currencies.ToListAsync();

            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();


            return new
            {
                category = category.Select(w=> new { w.Id, w.Name, w.New, w.Type, TypeList = type.Where(s=>s.CategoryId == w.Id) }),
                cities,
                currency,
                sharedDate
            };
        }

        public override async Task<ViewHomeAd> getPersonalAd(int id, HomeContext db)
        {
            return await db.ViewHomeAds.Include(w => w.Images).AsNoTracking().FirstOrDefaultAsync(w => w.Id == id);

        }
    }
}
