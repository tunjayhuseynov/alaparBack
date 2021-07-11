using AlApar.Classes.Bina;
using AlApar.Models;
using AlApar.Models.Bina;
using AlApar.Models.Bina.Views;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace AlApar.Repositories.Bina
{
    public class BinaCrud : Common<ViewBinaPersonalGeneral, BinaContext, Form, BinaAdsPersonal, BinaAdsPersonalLogs, BinaPersonalContacts, BinaPersonalPhotos, BinaCategories>, IBinaCrud
    {

        public override string TempFolder => "images/bina/temporarily";
        public override string MainFolder => "images/bina/personal";
        public override Func<BinaContext, int?, int, int, IAsyncEnumerable<ViewBinaPersonalGeneral>> FilterQuery => EF.CompileAsyncQuery((BinaContext db, int? id, int skip, int take) => db.ViewBinaPersonalGenerals.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        sbyte floorDetection = new sbyte();
        public override Func<ViewBinaPersonalGeneral, Form, bool> extra => (ViewBinaPersonalGeneral ad, Form form) =>
        {
            bool bottomFloor = form.Bottomfloor??false;
            bool middleFloor = form.Middlefloor??false;
            bool upperFloor = form.Upperfloor??false;

            if (bottomFloor || middleFloor || upperFloor)
            {
                if (ad.Floor == ad.BuildingFloor) floorDetection = 1;
                else if (ad.Floor < ad.BuildingFloor && ad.Floor > 1) floorDetection = 0;
                else floorDetection = -1;

                if (floorDetection == 1 && upperFloor) return true;
                else if (floorDetection == 0 && middleFloor) return true;
                else if (floorDetection == -1 && bottomFloor) return true;

                return false;
            }

            return true;
           
        };


        //GET
        public override async Task<object> getForm(BinaContext db)
        {
            var categories = await db.BinaCategories.AsNoTracking().ToListAsync();

            var metros = await db.Metros.AsNoTracking().ToListAsync();

            var cities = await db.Cities.AsNoTracking().ToListAsync();

            var regions = await db.Regions.AsNoTracking().ToListAsync();

            var villages = await db.Villages.AsNoTracking().ToListAsync();

            var sellType = await db.SellTypes.AsNoTracking().ToListAsync();

            var durationRentType = await db.BinaRentPaymentTypes.AsNoTracking().ToListAsync();

            var landAppointment = await db.BinaLandAppointments.AsNoTracking().ToListAsync();

            var rentals = await db.BinaRentalPros.AsNoTracking().ToListAsync();

            var currencies = await db.Currency.AsNoTracking().ToListAsync();

            var metroWays = await db.MetroWays.AsNoTracking().ToListAsync();

            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();

            Func<Villages, object> villageSelect = r => new { Id = r.Id, Name = r.Name };
            
            Func<Regions, object> regionSelect = a => new
            {
                Id = a.Id,
                Name = a.Name,
                Villages = villages.Where(x => x.RegionId == a.Id).Select(villageSelect)
            };
            
            Func<Cities, object> citySelect = w => new
            {
                w.Id,
                w.Name,
                Metros = metros.Where(b => b.cityId == w.Id),
                Regions = regions.Where(s => s.cityId == w.Id)
                                     .Select(regionSelect)
            };

            var result = new
            {
                Categories = categories,
                LandAppointment = landAppointment,
                Cities = cities.Select(citySelect),
                SellTypes = sellType.Select(w => new { Id = w.Id, Name = w.Name, Rent = durationRentType.Where(s => s.RentId == w.Id) }),
                Currency = currencies,
                Rentals = rentals,
                MetroWays = metroWays,
                SharedDate = sharedDate,
            };

            return result;
        }

    }
}
