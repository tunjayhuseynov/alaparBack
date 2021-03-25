using AlApar.Models.Auto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Auto
{
    public class AutoCrud : IAutoCrud
    {
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

            return new { 
            
                BanTypes = banTypes,
                Colors = colors,
                Fuels = fuels,
                TransmissionBoxs = transmissionBoxs,
                Transmitters = transmitters,
                Cities = cities,
                Currencies = currencies,
                Mark = marks.Select(w=> new { id = w.Id, name = w.Name, models = models.Where(s => s.MarkId == w.Id) })
            
            };
        }
    }
}
