using AlApar.Classes;
using AlApar.Classes.Auto;
using AlApar.Models.Auto;
using AlApar.Models.Auto.View;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using AlApar.Repositories.Common;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Auto
{
    public class AutoCrud : Common<ViewAutoAds, AutoContext, Form, AutoAds, AutoAdLogs, AutoContacts, AutoPhotos, AutoMarks>, IAutoCrud
    {
        public override string TempFolder => "images/auto/temporarily";
        public override string MainFolder => "images/auto/personal";
        public override Func<AutoContext, int?, int, int, IAsyncEnumerable<ViewAutoAds>> FilterQuery => EF.CompileAsyncQuery((AutoContext db, int? id, int skip, int take) => db.ViewAutoAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip));
        public override async Task<object> getForm(AutoContext db)
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

            var sellType = await db.SellTypes.AsNoTracking().ToListAsync();

            var durationRentType = await db.AutoRentPaymentTypes.AsNoTracking().ToListAsync();

            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();


            return new { 
            
                BanTypes = banTypes,
                Colors = colors,
                Fuels = fuels,
                TransmissionBoxs = transmissionBoxs,
                Transmitters = transmitters,
                Cities = cities,
                SellTypes = sellType.Select(w => new { Id = w.Id, Name = w.Name, Rent = durationRentType.Where(s => s.RentId == w.Id) }),
                Currencies = currencies,
                Mark = marks.Select(w=> new { id = w.Id, name = w.Name, models = models.Where(s => s.MarkId == w.Id) }),
                SharedDate = sharedDate,
            };
        }

    }
}
