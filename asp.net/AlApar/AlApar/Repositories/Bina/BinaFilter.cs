using AlApar.Classes.Bina;
using AlApar.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace AlApar.Repositories.Bina
{
    public class BinaFilter : IBinaFilter
    {
        private Func<alAparContext, int?, IAsyncEnumerable<BinaAdsPersonal>> query = EF.CompileAsyncQuery((alAparContext db, int? id) => db.BinaAdsPersonal.AsNoTracking().Where(w => w.CategoryId == id));

        public async Task<object> Get(alAparContext db)
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

            var result = new
            {
                Categories = categories,

                LandAppointment = landAppointment,

                Cities = cities
                .Select(w => new {
                    w.Id,
                    w.Name,
                    Metros = metros.Where(b => b.cityId == w.Id),
                    Regions = regions.Where(s => s.cityId == w.Id)
                                     .Select(a => new {
                                         Id = a.Id,
                                         Name = a.Name,
                                         Villages = villages.Where(x => x.RegionId == a.Id)
                                                                          .Select(r => new { Id = r.Id, Name = r.Name })
                                     })
                }),

                SellTypes = sellType.Select(w => new { Id = w.Id, Name = w.Name, Rent = durationRentType.Where(s => s.RentId == w.Id) }),
                Price = true,
                Area = true,
                Currency = currencies,
                Ipoteka = true,
                License = true,
                Rentals = rentals,
                MetroWays = metroWays,
            };

            return result;
        }

        public async Task<object> Post(filterResponse res, alAparContext db)
        {

            List<BinaAdsPersonal> result = new List<BinaAdsPersonal>();
            Dictionary<PropertyInfo, object> store = new Dictionary<PropertyInfo, object>();

            foreach (var item in res.GetType().GetProperties())
            {
                if (item.GetValue(res) != null && new BinaAdsPersonal().GetType().GetProperty(item.Name) != null)
                {
                    store.Add(item, item.GetValue(res));
                }
            }

            var list = query(db, res.CategoryId);
            await foreach (var item in list)
            {

                if (res.minPrice != null && item.Price < res.minPrice)
                {
                    continue;
                }
                if (res.maxPrice != null && item.Price > res.maxPrice)
                {
                    continue;
                }
                if (res.minArea != null && item.AreaSize < res.minArea)
                {
                    continue;
                }
                if (res.maxArea != null && item.AreaSize > res.maxArea)
                {
                    continue;
                }
                if (res.minRoomAmount != null && item.RoomAmount < res.minRoomAmount)
                {
                    continue;
                }
                if (res.maxRoomAmount != null && item.RoomAmount > res.maxRoomAmount)
                {
                    continue;
                }
                if (res.minApartmantFloor != null && item.Floor < res.minApartmantFloor)
                {
                    continue;
                }
                if (res.maxApartmantFloor != null && item.Floor > res.maxApartmantFloor)
                {
                    continue;
                }
                if (res.minFloorAmount != null && item.BuildingFloor < res.minFloorAmount)
                {
                    continue;
                }
                if (res.maxFloorAmount != null && item.BuildingFloor > res.maxFloorAmount)
                {
                    continue;
                }


                foreach (var keyValue in store)
                {
                    if (item.GetType().GetProperty(keyValue.Key.Name).GetValue(item) != null && item.GetType().GetProperty(keyValue.Key.Name).GetValue(item).ToString() != keyValue.Value.ToString())
                    {
                        break;
                    }
                    if (store.Last().Key == keyValue.Key)
                    {
                        result.Add(item);
                    }
                }
            }

            return result;

        }
    }
}
