using System.Collections.Generic;
using AlApar.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Dynamic;
using Newtonsoft.Json;
using System.Linq.Expressions;
using System;
using System.Reflection;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class BinaController : Controller
    {
        private alAparContext db = new alAparContext();
        private BinaAdsPersonal adCopy = new BinaAdsPersonal();

        [Route("getAll")]
        public async Task <IEnumerable<BinaAdsPersonal>> getAll()
        {
            return await db.BinaAdsPersonal.ToListAsync();
        }

        [Route("get/{id}")]
        public async Task<BinaAdsPersonal> get(int id)
        {
            return await db.BinaAdsPersonal.FindAsync(id);
        }

        [Route("Filter")]
        [HttpGet]
        public async Task<object> getFilter()
        {
            var categories = await db.BinaCategories.ToListAsync();

            var metros = await db.Metros.ToListAsync();

            var cities = await db.Cities.ToListAsync();

            var regions = await db.Regions.ToListAsync();

            var villages = await db.Villages.ToListAsync();

            var sellType = await db.SellTypes.ToListAsync();

            var durationRentType = await db.BinaRentPaymentTypes.ToListAsync();

            var landAppointment = await db.BinaLandAppointments.ToListAsync();

            var result = new
            {
                Categories = categories.Select(w=> new { Id = w.Id , Name = w.Name, 
                    RoomAmount = w.RoomAmount, 
                    FloorAmount = w.FloorAmount,
                    Floor = w.Floor,
                    LandAppointment = w.LandAppointment
                }),

                LandAppointment = landAppointment,

                Cities = cities
                .Select(w => new { w.Id, w.Name, 
                    Metros = metros.Where(b=>b.cityId == w.Id),
                    Regions = regions.Where(s=>s.cityId == w.Id)
                .Select(a=> new { Id = a.Id, Name = a.Name, Villages = villages.Where(x=> x.RegionId == a.Id)
                .Select(r=> new { Id = r.Id, Name = r.Name}) 
                
                })}),

                SellTypes = sellType.Select(w=> new { Id = w.Id, Name = w.Name, Rent = durationRentType.Where(s=>s.RentId == w.Id) }),
                Price = true,
                Area = true,
                Ipoteka = true,
                License = true
            };

            return result;

        }

        private Func<alAparContext, int?, IAsyncEnumerable<BinaAdsPersonal>> query = EF.CompileAsyncQuery((alAparContext db, int? id) => db.BinaAdsPersonal.AsNoTracking().Where(w => w.CategoryId == id));
        [Route("Search")]
        [HttpPost]
        public async Task<object> postFilter([FromBody] filterResponse res)
        {
            List<BinaAdsPersonal> result = new List<BinaAdsPersonal>();
            Dictionary<PropertyInfo, object> store = new Dictionary<PropertyInfo, object>();

            foreach (var item in res.GetType().GetProperties())
            {
                if(item.GetValue(res) != null  && adCopy.GetType().GetProperty(item.Name) != null)
                {
                    store.Add(item, item.GetValue(res));
                }
            }

            var list = query(db, res.CategoryId);
            await foreach (var item in list)
            {

                if(res.minPrice != null && item.Price < res.minPrice)
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
                if (res.minFloorAmount != null && item.FloorAmount < res.minFloorAmount)
                {
                    continue;
                }
                if (res.maxFloorAmount != null && item.FloorAmount > res.maxFloorAmount)
                {
                    continue;
                }


                foreach (var keyValue in store)
                {
                    if (item.GetType().GetProperty(keyValue.Key.Name).GetValue(item) != null && item.GetType().GetProperty(keyValue.Key.Name).GetValue(item).ToString() != keyValue.Value.ToString())
                    {
                        break;
                    }
                    if(store.Last().Key == keyValue.Key)
                    {
                        result.Add(item);
                    }
                }
            }

            


            return result;
        }


        public class filterResponse
        {
            [JsonProperty(PropertyName = "category")]
            public int? CategoryId { get; set; }
            [JsonProperty(PropertyName = "city")]
            public int? CityId { get; set; }
            [JsonProperty(PropertyName = "region")]
            public int? RegionId { get; set; }
            [JsonProperty(PropertyName = "village")]
            public int? VillageId { get; set; }
            [JsonProperty(PropertyName = "metro")]
            public int? MetroId { get; set; }
            [JsonProperty(PropertyName = "sellType")]
            public int? SellTypeId { get; set; }
            [JsonProperty(PropertyName = "licence")]
            public bool HasLicense { get; set; }
            [JsonProperty(PropertyName = "ipoteka")]
            public bool HasMortgage { get; set; }
            public int? minPrice { get; set; }
            public int? maxPrice { get; set; }
            public int? minArea { get; set; }
            public int? maxArea { get; set; }
            public int? minRoomAmount { get; set; }
            public int? maxRoomAmount { get; set; }
            public int? minApartmantFloor { get; set; }
            public int? maxApartmantFloor { get; set; }
            public int? minFloorAmount { get; set; }
            public int? maxFloorAmount { get; set; }
        }

    }
}
