using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlApar.Models.Private.View;
using AlApar.Models.Private;
using AlApar.Classes.Private;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;

namespace AlApar.Repositories.Private
{
    public class PrivateCrud : Common<ViewPrivateAd, PrivateContext, Form, PrivateAd, PrivateLog, PrivateContact, PrivatePhoto, PrivateCategory>, IPrivateCrud
    {

        public override string TempFolder => "images/private/temporarily";
        public override string MainFolder => "images/private/personal";

        public override Func<PrivateContext, int?, int, int, IAsyncEnumerable<ViewPrivateAd>> FilterQuery => EF.CompileAsyncQuery((PrivateContext db, int? id, int skip, int take) => db.ViewPrivateAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        public override async Task<object> getForm(PrivateContext db)
        {
            var category = await db.PrivateCategories.AsNoTracking().ToListAsync();

            var clothesGenders = await db.PrivateClothesGenders.AsNoTracking().ToListAsync();

            var clothesTypes = await db.PrivateClothesTypes.AsNoTracking().ToListAsync();

            var types = await db.PrivateTypes.AsNoTracking().ToListAsync();

            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();
            
            var cities = await db.Cities.ToListAsync();

            var currency = await db.Currencies.ToListAsync();


            Func<PrivateClothesGender, object> clothesGenderSelector = w => new { w.Id, w.Name, ClothesTypes = clothesTypes.Where(s=>s.Id == w.Id)};

            Func<PrivateCategory, object> categorySelector = w => new { w.Id, w.Name, w.New, w.Delivery, ClothesGender = clothesGenders.Select(clothesGenderSelector), Types = types.Where(s=>s.Id == w.Id) };

            return new {
                Category = category.Select(categorySelector),
                cities,
                currency,
                sharedDate
            };
        }

        public override async Task<ViewPrivateAd> getPersonalAd(int id, PrivateContext db)
        {
            return await db.ViewPrivateAds.Include(w => w.Images).AsNoTracking().FirstOrDefaultAsync(w => w.Id == id);

        }
    }
}
