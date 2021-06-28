using AlApar.Classes.Animal;
using AlApar.Models.Animal;
using AlApar.Models.Animal.View;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Animal
{
    public class AnimalCrud : Common<ViewAnimalAd, AnimalContext, Form, AnimalAd, AnimalLog, AnimalContact, AnimalPhoto, AnimalCategory>, IAnimalCrud
    {
        public override string TempFolder => "images/animal/temporarily";
        public override string MainFolder => "images/animal/personal";

        public override Func<AnimalContext, int?, int, int, IAsyncEnumerable<ViewAnimalAd>> FilterQuery => EF.CompileAsyncQuery((AnimalContext db, int? id, int skip, int take) => db.ViewAnimalAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        public override async Task<object> getForm(AnimalContext db)
        {
            var category = await db.AnimalCategories.AsNoTracking().ToListAsync();
            var generas = await db.AnimalGeneras.AsNoTracking().ToListAsync();
            var types = await db.AnimalTypes.AsNoTracking().ToListAsync();
            var currency = await db.Currencies.AsNoTracking().ToListAsync();
            var cities = await db.Cities.AsNoTracking().ToListAsync();
            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();


            return new
            {
                Category = category.Select(w =>
                new { Id= w.Id, Name = w.Name, Genera = w.Genera, Type = w.Type, 
                    GeneraList = generas.Where(d => d.CategoryId == w.Id),
                    TypeList = types.Where(s=>s.CategoryId == w.Id)
                }),
                sharedDate,
                currency,
                cities
            };

        }

        public override async Task<ViewAnimalAd> getPersonalAd(int id, AnimalContext db)
        {
            return await db.ViewAnimalAds.Include(w => w.Images).AsNoTracking().FirstOrDefaultAsync(w => w.Id == id);

        }
    }
}
