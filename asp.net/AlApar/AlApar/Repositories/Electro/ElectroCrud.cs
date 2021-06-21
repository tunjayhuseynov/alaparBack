using AlApar.Classes;
using AlApar.Classes.Electro;
using AlApar.Models.Electro;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlApar.Repositories.Common;
using AlApar.Models.Electro.Views;

namespace AlApar.Repositories.Electro
{
    public class ElectroCrud : Common<ViewElectroAds, ElectroContext, Form, ElectroAds, ElectroLogs, ElectroContacts, ElectroPhotos>, IElectroCrud
    {
        public override string TempFolder => "images/electro/temporarily";
        public override string MainFolder => "images/electro/personal";

        public override async Task<object> getForm(ElectroContext db)
        {
            var cities = await db.Cities.AsNoTracking().ToListAsync();

            var category = await db.ElectroCategories.AsNoTracking().ToListAsync();

            var type = await db.ElectroTypes.AsNoTracking().ToListAsync();

            var currency = await db.Currencies.AsNoTracking().ToListAsync();

            var operators = await db.ElectroOperators.AsNoTracking().ToListAsync();

            var mark = await db.ElectroPhoneMarks.AsNoTracking().ToListAsync();

            var model = await db.ElectroPhoneModels.AsNoTracking().ToListAsync();

            var computerMark = await db.ElectroComputerMarks.AsNoTracking().ToListAsync();

            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();


            Func<ElectroPhoneMarks, object> forMark = a => new { a.Id, a.Name, Model = model.Where(x => x.MarkId == a.Id) };

            Func<ElectroCategories, object> forCat = w => new
            {
                w.Id,
                w.Name,
                w.ActivateComputerMark,
                w.ActivateOperator,
                w.ActivatePhoneMark,
                w.ActivateType,
                Type = type.Where(s => s.CategoryId == w.Id),
                Mark = mark.Where(s=>s.CategoryId == w.Id).Select(forMark),
                Operator = operators.Where(s=>s.CategoryId == w.Id),
                ComputerMark = computerMark.Where(s=>s.CategoryId == w.Id)

            };

            return new
            {
                Cities = cities,
                Categories = category.Select(forCat),
                Currencies = currency,
                SharedDate = sharedDate,

            };
        }

        public override async Task<ViewElectroAds> getPersonalAd(int id, ElectroContext db)
        {
            return await db.ViewElectroAds.Include(w => w.Images).AsNoTracking().FirstOrDefaultAsync(w => w.Id == id);
        }

        public async Task<IEnumerable<ElectroPhoneColors>> getColors(ElectroContext db, int modelId)
        {
            return await db.ElectroPhoneColors.AsNoTracking().Where(w => w.ModelId == modelId).ToListAsync();
        }

        public async Task<IEnumerable<ElectroPhoneStorages>> getStorages(ElectroContext db, int modelId)
        {
            return await db.ElectroPhoneStorages.AsNoTracking().Where(w => w.ModelId == modelId).ToListAsync();

        }

    }
}
