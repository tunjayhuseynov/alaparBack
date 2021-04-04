using AlApar.Classes;
using AlApar.Classes.Auto;
using AlApar.Models.Auto;
using AlApar.Models.Auto.View;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Auto
{
    public class AutoCrud : IAutoCrud
    {
        private enum LastTimes
        {
            Day = 1,
            Week = 2,
            Month = 3
        }
        public string TempFolder => "images/auto/temporarily";
        public string MainFolder => "images/auto/personal";


        public async Task addToDb(Form form, AutoContext db, IUtility utility, IWebHostEnvironment _webHostEnvironment)
        {
            Func<AutoAds, AutoContacts, AutoAdLogs, Form, Task> action = async (auto, contact, logs, form) =>
                auto.Title = $"{(await db.AutoMarks.FindAsync(form.MarkId)).Name} {(await db.AutoModels.FindAsync(form.ModelId)).Name}";


            await utility.add2Db<AutoAds, AutoContacts, AutoAdLogs, AutoContext, Form, AutoPhotos>
                (db, form, "ContactId", TempFolder, MainFolder, _webHostEnvironment, action);
        }

        public async Task<object> getForm(AutoContext db)
        {
            var banTypes = await db.AutoBanTypes.AsNoTracking().ToListAsync();

            var colors = await db.AutoColors.AsNoTracking().ToListAsync();

            var fuels = await db.AutoFuels.AsNoTracking().ToListAsync();

            var marks = await db.AutoMarks.AsNoTracking().ToListAsync();

            var models = await db.AutoModels.AsNoTracking().ToListAsync();

            var transmissionBoxs = await db.AutoTransmissionBoxs.AsNoTracking().ToListAsync();

            var transmitters = await db.AutoTransmitters.AsNoTracking().ToListAsync();

            var cities = await db.Cities.AsNoTracking().ToListAsync();

            var currencies = await db.Currencies.AsNoTracking().ToListAsync();

            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();

            return new { 
            
                BanTypes = banTypes,
                Colors = colors,
                Fuels = fuels,
                TransmissionBoxs = transmissionBoxs,
                Transmitters = transmitters,
                Cities = cities,
                Currencies = currencies,
                Mark = marks.Select(w=> new { id = w.Id, name = w.Name, models = models.Where(s => s.MarkId == w.Id) }),
                SharedDate = sharedDate,
            };
        }

        public async Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment)
        {
           return await _utility.SaveTempImage(image, TempFolder, _webHostEnvironment);
        }

        public async Task deleteTempImage(string name, IUtility utility, IWebHostEnvironment _webHostEnvironment)
        {
            await utility.deleteTempImage(name, TempFolder, _webHostEnvironment);
        }

        public async Task<ViewAutoAds> getPersonalAd(int id, AutoContext db)
        {
            return await db.ViewAutoAds.Include(w => w.Images).AsNoTracking().FirstOrDefaultAsync(w => w.Id == id);
            
        }

        private Func<AutoContext, int?, int, int, IAsyncEnumerable<ViewAutoAds>> query = EF.CompileAsyncQuery((AutoContext db, int? id, int skip, int take) => db.ViewAutoAds.Include(w => w.Images).AsNoTracking().Where(w => w.MarkId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        public async Task<object> PostFilter(Form res, AutoContext db, int skip, int take, IUtility utility)
        {
            return await utility.PostFilter<Form, AutoContext, ViewAutoAds, AutoAds>(res, db, "MarkId", skip, take,query);
        }
    }
}
