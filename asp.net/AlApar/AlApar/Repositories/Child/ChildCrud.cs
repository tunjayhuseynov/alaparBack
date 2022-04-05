using AlApar.Classes.Child;
using AlApar.Models.Child;
using AlApar.Models.Child.Views;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlApar.Classes.Utility;

namespace AlApar.Repositories.Child
{
    public class ChildCrud : Common<ViewChildAd, ChildContext, Form, ChildAd, ChildLog, ChildContact, ChildPhoto, ChildCategory, ChildStory>, IChildCrud
    {
        public override string TempFolder => "images/child/temporarily";
        public override string MainFolder => "images/child/personal";

        public override Func<ChildContext, int?, int, int, IAsyncEnumerable<ViewChildAd>> FilterQuery => EF.CompileAsyncQuery((ChildContext db, int? id, int skip, int take) => db.ViewChildAds.Include(w => w.Images).AsNoTracking().AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip));

        public override async Task<object> getForm(ChildContext db)
        {
            var category = await db.ChildCategories.AsNoTracking().ToListAsync();

            var type = await db.ChildTypes.AsNoTracking().ToListAsync();

            var gender = await db.ChildClothesGenders.AsNoTracking().ToListAsync();

            var clothes = await db.ChildClothesTypes.AsNoTracking().ToListAsync();

            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();
            var colors = await db.ClothesColors.AsNoTracking().ToListAsync();
            var shoesSizes = await db.ShoesSizes.AsNoTracking().Where(w=>w.TableName == (char)DbCharNames.Child).ToListAsync();
            var clothesSizes = await db.ClothesSizes.AsNoTracking().Where(w=>w.TableName == (char)DbCharNames.Child).ToListAsync();

            var cities = await db.Cities.AsNoTracking().ToListAsync();

            var currency = await db.Currencies.AsNoTracking().ToListAsync();

            Func<ChildClothesGender, object> clothesGenderSelector = w => new { w.Id, w.Name, ClothesTypes = clothes.Where(s => s.ClothesGenderId == w.Id) };

            return new
            {
                category = category.Select(w=>new { w.Id, w.Name, w.New, w.Delivery, ClothesGender = gender.Where(s => s.CategoryId == w.Id).Select(clothesGenderSelector), Types = type.Where(s => s.CategoryId == w.Id) }),
                cities,
                colors,
                shoesSizes,
                clothesSizes,
                currency,
                sharedDate
            };
        }

    }
}
