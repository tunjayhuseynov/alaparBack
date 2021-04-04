using AlApar.Classes;
using AlApar.Classes.Bina;
using AlApar.Models;
using AlApar.Models.Bina;
using AlApar.Models.Bina.Views;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;


namespace AlApar.Repositories.Bina
{
    public class BinaCrud : IBinaCrud
    {

        public string TempFolder => "images/bina/temporarily";
        public string MainFolder => "images/bina/personal";


        //GET
        public async Task<object> getForm(BinaContext db)
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
                Price = true,
                Area = true,
                Currency = currencies,
                Ipoteka = true,
                License = true,
                Rentals = rentals,
                MetroWays = metroWays,
                SharedDate = sharedDate,
            };

            return result;
        }

        public async Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment)
        {
            return await _utility.SaveTempImage(image, TempFolder, _webHostEnvironment);
        }

        public async Task<ViewBinaPersonalGeneral> getPersonalAd(int id, BinaContext db)
        {
            var json = await db.ViewBinaPersonalGenerals.Include(w => w.Images).AsNoTracking().FirstOrDefaultAsync(w => w.Id == id);

            return json;
        }

        //POST
        public async Task addToDb(Form form, BinaContext db, IUtility utility, IWebHostEnvironment _webHostEnvironment)
        {
            Func<BinaAdsPersonal, BinaPersonalContacts, BinaAdsPersonalLogs, Form, Task> action = async (ad, contact, logs, form) => {

                if (form.VillageId != null)
                {
                    ad.Adress = $"{(await db.Villages.FindAsync(form.VillageId)).Name.TrimEnd()}, {(await db.Regions.FindAsync(form.RegionId)).Name.TrimEnd()}";
                }
                else if (form.RegionId != null)
                {
                    ad.Adress = $"{(await db.Regions.FindAsync(form.RegionId)).Name.TrimEnd()}, {(await db.Cities.FindAsync(form.CityId)).Name.TrimEnd()}";
                }
                else
                {
                    ad.Adress = $"{(await db.Cities.FindAsync(form.CityId)).Name.TrimEnd()}";
                }

            };
            await utility.add2Db<BinaAdsPersonal, BinaPersonalContacts, BinaAdsPersonalLogs, BinaContext, Form, BinaPersonalPhotos>
                (db, form, "PersonalContactId", TempFolder, MainFolder, _webHostEnvironment, action);

        }


        private Func<BinaContext, int?, int, int, IAsyncEnumerable<ViewBinaPersonalGeneral>> query = EF.CompileAsyncQuery((BinaContext db, int? id, int skip, int take) => db.ViewBinaPersonalGenerals.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));

        public async Task<object> PostFilter(Form res, BinaContext db, int skip, int take, IUtility utility)
        {
            Func<ViewBinaPersonalGeneral, bool> extra = (item) =>
            {
                int placement = FloorPlace(item);

                if (res.Bottomfloor == true || res.Middlefloor == true || res.Upperfloor == true)
                {
                    if (res.Bottomfloor != true && placement == -1) return false;
                    if (res.Middlefloor != true && placement == 0) return false;
                    if (res.Upperfloor != true && placement == 1) return false;
                }

                return true;
            };

            return await utility.PostFilter<Form, BinaContext, ViewBinaPersonalGeneral, BinaAdsPersonal>
                (res, db, "CategoryId", skip, take, query, extra);
        }

        public int FloorPlace(ViewBinaPersonalGeneral ad)
        {
            if (ad.Floor == ad.BuildingFloor) return 1;
            else if (ad.Floor < ad.BuildingFloor && ad.Floor > 1) return 0;

            return -1;
        }

        public async Task deleteTempImage(string name, IUtility utility, IWebHostEnvironment _webHostEnvironment)
        {
           await utility.deleteTempImage(name, TempFolder, _webHostEnvironment);
        }
    }
}
