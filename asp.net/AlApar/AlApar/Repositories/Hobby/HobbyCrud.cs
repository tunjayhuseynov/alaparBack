﻿using AlApar.Classes.Hobby;
using AlApar.Models.Hobby;
using AlApar.Models.Hobby.Views;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Hobby
{
    public class HobbyCrud : Common<ViewHobbyAd, HobbyContext, Form, HobbyAd, HobbyLog, HobbyContact, HobbyPhoto, HobbyCategory>, IHobbyCrud
    {
        public override string TempFolder => "images/hobby/temporarily";
        public override string MainFolder => "images/hobby/personal";

        public override Func<HobbyContext, int?, int, int, IAsyncEnumerable<ViewHobbyAd>> FilterQuery => EF.CompileAsyncQuery((HobbyContext db, int? id, int skip, int take) => db.ViewHobbyAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip));

        public override async Task<object> getForm(HobbyContext db)
        {
            var category = await db.HobbyCategories.AsNoTracking().ToListAsync();

            var type = await db.HobbyTypes.AsNoTracking().ToListAsync();

            var currency = await db.Currencies.AsNoTracking().ToListAsync();

            var cities = await db.Cities.AsNoTracking().ToListAsync();

            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();


            return new
            {
                Category = category.Select(w=> new { w.Id, w.Name, w.New, w.Delivery, type = type.Where(d=>d.CategoryId == w.Id) }),
                currency,
                cities,
                sharedDate
            };
        }


    }
}
