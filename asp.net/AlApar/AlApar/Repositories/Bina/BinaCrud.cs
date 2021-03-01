using AlApar.Classes;
using AlApar.Classes.Bina;
using AlApar.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Bina
{
    public class BinaCrud : IBinaCrud
    {
        //GET
        public async Task<object> getForm(alAparContext db)
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

        public async Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment)
        {
            if (image != null && _utility.ImageTypes.Contains(image.ContentType))
            {
                string folder = Path.Combine(_webHostEnvironment.WebRootPath, "images/temporarily");
                string uniqueName = $@"{Guid.NewGuid()}.{image.FileName.Split(".").Last()}";
                string path = Path.Combine(folder, uniqueName);

                using var fileStream = new FileStream(path, FileMode.Create);
                await image.CopyToAsync(fileStream);

                return new { fileName = uniqueName };
            }

            return null;
        }

        public async Task<object> getPersonalAd(int id, alAparContext db)
        {
            var json = await db.BinaAdsPersonal
                .Include(w=>w.Category)
                .Include(w=>w.City)
                .Include(w=>w.Region)
                .Include(w=>w.Village)
                .Include(w=>w.AdStatus)
                .Include(w=>w.Currency)
                .Include(w=>w.LandAppointment)
                .Include(w=>w.Metro)
                .Include(w=>w.PersonalContact)
                .Include(w=>w.RentPaymentType)
                .Include(w=>w.SellType)
                .Include(w=>w.BinaPersonalPhotos)
                .AsNoTracking()
                .Select(w=> new { 
                    Id = w.Id, 
                    Status = w.AdStatus.Name,
                    Category = w.Category, 
                    City = w.City.Name,
                    Region = w.Region.Name,
                    Village = w.Village.Name,
                    Metrp = w.Metro.Name,
                    Currency = w.Currency.Name,
                    LandAppointment = w.LandAppointment.Name,
                    SelType = w.SellType.Name,
                    View = w.Viewed,
                    Adress = w.Adress,
                    Price = w.Price,
                    Area = w.AreaSize,
                    Coordinate = new { Longitude = w.Longitude, Latitude = w.Latitude },
                    About = w.About,
                    Licence = w.HasLicense,
                    Mortgage = w.HasMortgage,
                    RoomAmount = w.RoomAmount,
                    Building = w.BuildingFloor,
                    Apartmant = w.Floor,
                    Icare = w.HasIcare,
                    Belediyye = w.HasBelediyye,
                    Images = w.BinaPersonalPhotos.Select(s=>new { Src = s.ImagePath, Primary = s.PrimaryImage })
                    

                })
                .FirstOrDefaultAsync(w=> w.Id == id);

                            
            return json;
        }

        //POST
        public async Task addToDb(Form form, alAparContext db, IWebHostEnvironment _webHostEnvironment)
        {
            var bina = new BinaAdsPersonal();
            var contacts = new PersonalContacts();
            var info = new BinaAdsPersonalInfos()
            {
                CreatedDate = DateTime.UtcNow,
                FromDate = DateTime.UtcNow,
                TillDate = DateTime.UtcNow.AddMonths(1)
            };
            string tempFolder = Path.Combine(_webHostEnvironment.WebRootPath, "images/temporarily");
            string mainFolder = Path.Combine(_webHostEnvironment.WebRootPath, "images/personal");

            foreach (var item in new Form().GetType().GetProperties())
            {
                if (item.GetValue(form) != null && bina.GetType().GetProperty(item.Name) != null)
                {
                    bina.GetType().GetProperty(item.Name).SetValue(bina, item.GetValue(form));
                }
                else if (item.GetValue(form) != null && contacts.GetType().GetProperty(item.Name) != null)
                {
                    contacts.GetType().GetProperty(item.Name).SetValue(contacts, item.GetValue(form));
                }
            }

            await db.PersonalContacts.AddAsync(contacts);
            await db.BinaAdsPersonalInfos.AddAsync(info);
            await db.SaveChangesAsync();

            bina.privateId = new Random().Next(100000, 1000000).ToString("D6");
            bina.InfoId = info.Id;
            bina.Viewed = 0;
            bina.AdStatusId = (int)Status.AdStatus.Pending;
            bina.AdPackageId = (int)Status.AdPackage.Standart;

            if(form.VillageId != null)
            {
                bina.Adress = $"{(await db.Villages.FindAsync(form.VillageId)).Name}, {(await db.Regions.FindAsync(form.RegionId)).Name}";
            }
            else if (form.RegionId != null)
            {
                bina.Adress = $"{(await db.Regions.FindAsync(form.RegionId)).Name}, {(await db.Cities.FindAsync(form.CityId)).Name}";
            }
            else
            {
                bina.Adress = $"{(await db.Cities.FindAsync(form.CityId)).Name}";
            }

            bina.PersonalContactId = contacts.Id;

            await db.BinaAdsPersonal.AddAsync(bina);
            await db.SaveChangesAsync();

            foreach (var item in form.images)
            {
                if (File.Exists($"{tempFolder}/{item}"))
                {
                    if (!Directory.Exists($"{mainFolder}/{bina.Id}"))
                    {
                        Directory.CreateDirectory($"{mainFolder}/{bina.Id}");
                    }

                    File.Move($"{tempFolder}/{item}", $"{mainFolder}/{bina.Id}/{item}", true);
                }
                else
                {
                    throw new Exception("Image does not exist in the Temp Folder");
                }
            }

            await db.BinaPersonalPhotos.AddRangeAsync(
                form.images
                .Select((w,i)=> new BinaPersonalPhotos() { AdId = bina.Id, ImagePath = $"/images/personal/{bina.Id}/{w}", PrimaryImage = i })
            );

            await db.SaveChangesAsync();
        }
    }
}
