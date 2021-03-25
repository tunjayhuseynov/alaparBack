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
        private enum LastTimes
        {
            Day = 1,
            Week = 2,
            Month = 3
        }

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
                SharedDate = sharedDate,
            };

            return result;
        }

        public async Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment)
        {
            if (image != null && _utility.ImageTypes.Contains(image.ContentType))
            {
                string folder = Path.Combine(_webHostEnvironment.WebRootPath, TempFolder);

                if (!Directory.Exists($"{folder}"))
                {
                    Directory.CreateDirectory($"{folder}");
                }

                string uniqueName = $@"{Guid.NewGuid()}.{image.FileName.Split(".").Last()}";
                string path = Path.Combine(folder, uniqueName);

                using var fileStream = new FileStream(path, FileMode.Create);
                await image.CopyToAsync(fileStream);

                return new { fileName = uniqueName };
            }

            return null;
        }

        public async Task<ViewBinaPersonalGeneral> getPersonalAd(int id, BinaContext db)
        {
            var json = await db.ViewBinaPersonalGenerals.Include(w=>w.Images).AsNoTracking().FirstOrDefaultAsync(w => w.Id == id);
                            
            return json;
        }

        //POST
        public async Task addToDb(Form form, BinaContext db, IWebHostEnvironment _webHostEnvironment)
        {
            var bina = new BinaAdsPersonal();
            var contacts = new BinaPersonalContacts();
            var info = new BinaAdsPersonalLogs()
            {
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                FromDate = DateTime.UtcNow,
                TillDate = DateTime.UtcNow.AddMonths(1)
            };
            string tempFolder = Path.Combine(_webHostEnvironment.WebRootPath, TempFolder);
            string mainFolder = Path.Combine(_webHostEnvironment.WebRootPath, MainFolder);

            foreach (var item in new Form().GetType().GetProperties())
            {
                if (item.GetValue(form) != null && bina.GetType().GetProperty(item.Name) != null)
                {
                    bina.GetType().GetProperty(item.Name).SetValue(bina, item.GetValue(form));
                }
                else if (item.GetValue(form) != null && contacts.GetType().GetProperty(item.Name) != null)
                {
                    contacts.GetType().GetProperty(item.Name).SetValue(contacts, item.GetValue(form));
                    contacts.Timespan = DateTime.UtcNow;
                }
            }

            await db.PersonalContacts.AddAsync(contacts);
            await db.BinaAdsPersonalInfos.AddAsync(info);
            await db.SaveChangesAsync();

            bina.privateId = new Random().Next(100000000, 1000000000).ToString("D9");
            bina.InfoId = info.Id;
            bina.Viewed = 0;
            bina.AdStatusId = (int)Status.AdStatus.Pending;
            bina.AdPackageId = (int)Status.AdPackage.Standart;

            if(form.VillageId != null)
            {
                bina.Adress = $"{(await db.Villages.FindAsync(form.VillageId)).Name.TrimEnd()}, {(await db.Regions.FindAsync(form.RegionId)).Name.TrimEnd()}";
            }
            else if (form.RegionId != null)
            {
                bina.Adress = $"{(await db.Regions.FindAsync(form.RegionId)).Name.TrimEnd()}, {(await db.Cities.FindAsync(form.CityId)).Name.TrimEnd()}";
            }
            else
            {
                bina.Adress = $"{(await db.Cities.FindAsync(form.CityId)).Name.TrimEnd()}";
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

                    Image img = Image.FromFile($"{mainFolder}/{bina.Id}/{item}");
                    Size tumbSize = GetThumbnailSize(img);

                    Image thumbnail = img.GetThumbnailImage(tumbSize.Width, tumbSize.Height, null, IntPtr.Zero);

                    thumbnail.Save($"{mainFolder}/{bina.Id}/thumb-{item}");
                }
                else
                {
                    throw new Exception("Image does not exist in the Temp Folder");
                }
            }

            await db.BinaPersonalPhotos.AddRangeAsync(
                form.images
                .Select((w,i)=> new BinaPersonalPhotos() { AdId = bina.Id, ImagePath = $"/{MainFolder}/{bina.Id}/{w}", PrimaryImage = i, Thumbnail = $"/{MainFolder}/{bina.Id}/thumb-{w}" })
            );

            await db.SaveChangesAsync();
        }

        public Size GetThumbnailSize(Image original)
        {
            // Maximum size of any dimension.
            const int maxPixels = 250;

            // Width and height.
            int originalWidth = original.Width;
            int originalHeight = original.Height;

            // Return original size if image is smaller than maxPixels
            if (originalWidth <= maxPixels || originalHeight <= maxPixels)
            {
                return new Size(originalWidth, originalHeight);
            }

            // Compute best factor to scale entire image based on larger dimension.
            double factor;
            if (originalWidth > originalHeight)
            {
                factor = (double)maxPixels / originalWidth;
            }
            else
            {
                factor = (double)maxPixels / originalHeight;
            }

            // Return thumbnail size.
            return new Size((int)(originalWidth * factor), (int)(originalHeight * factor));
        }



        private Func<BinaContext, int?, int, int, IAsyncEnumerable<ViewBinaPersonalGeneral>> query = EF.CompileAsyncQuery((BinaContext db, int? id, int skip, int take) => db.ViewBinaPersonalGenerals.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));


        public async Task<object> PostFilter(Form res, BinaContext db, int skip, int take)
        {

            List<ViewBinaPersonalGeneral> result = new List<ViewBinaPersonalGeneral>();
            Dictionary<PropertyInfo, object> store = new Dictionary<PropertyInfo, object>();

            PropertyInfo[] propertyInfos = new Form().GetType().GetProperties();


            if (propertyInfos.Count() > 0)
            {
                foreach (var item in propertyInfos)
                {
                    if (item.GetValue(res) != null && new BinaAdsPersonal().GetType().GetProperty(item.Name) != null)
                    {
                        store.Add(item, item.GetValue(res));
                    }
                }
            }

            var list = query(db, res.CategoryId, skip, take);
            await foreach (var item in list)
            {

                if (res.MinPrice != null && item.Price < res.MinPrice) continue;
                if (res.MaxPrice != null && item.Price > res.MaxPrice) continue;

                if (res.MinArea != null && item.AreaSize < res.MinArea) continue;
                if (res.MaxArea != null && item.AreaSize > res.MaxArea) continue;

                if (res.MinRoom != null && item.RoomAmount < res.MinRoom) continue;
                if (res.MaxRoom != null && item.RoomAmount > res.MaxRoom) continue;

                if (res.MinApartmentFloor != null && item.Floor < res.MinApartmentFloor) continue;
                if (res.MaxApartmentFloor != null && item.Floor > res.MaxApartmentFloor) continue;

                if (res.MinBuildingFloor != null && item.BuildingFloor < res.MinBuildingFloor) continue;
                if (res.MaxBuildingFloor != null && item.BuildingFloor > res.MaxBuildingFloor) continue;

                if (res.MinMetroDuration != null && item.MetroDuration < res.MinMetroDuration) continue;
                if (res.MaxMetroDuration != null && item.MetroDuration > res.MaxMetroDuration) continue;

                if (res.MinLandArea != null && item.SecondAreaSize < res.MinLandArea) continue;
                if (res.MaxLandArea != null && item.SecondAreaSize > res.MaxLandArea) continue;

                if (res.SharedDate != null)
                {
                    if (item.ModifiedDate is not null)
                    {
                        DateTime comparableTime = res.SharedDate switch
                        {
                            (int)LastTimes.Day => item.ModifiedDate.Value.AddDays(1),
                            (int)LastTimes.Week => item.ModifiedDate.Value.AddDays(7),
                            (int)LastTimes.Month => item.ModifiedDate.Value.AddMonths(1),
                            _ => throw new NotImplementedException()
                        };

                        if (comparableTime < DateTime.UtcNow) continue;

                    }
                }

                int placement = FloorPlace(item);

                if (res.Bottomfloor != null || res.Middlefloor != null || res.Upperfloor != null)
                {
                    if (res.Bottomfloor == null && placement == -1) continue;
                    if (res.Middlefloor == null && placement == 0) continue;
                    if (res.Upperfloor == null && placement == 1) continue;
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

        public int FloorPlace(ViewBinaPersonalGeneral ad)
        {
            if (ad.Floor == ad.BuildingFloor) return 1;
            else if (ad.Floor < ad.BuildingFloor && ad.Floor > ad.BuildingFloor) return 0;

            return -1;
        }

        public Task deleteTempImage(string name, IWebHostEnvironment _webHostEnvironment)
        {

            string tempFolder = Path.Combine(_webHostEnvironment.WebRootPath, TempFolder);
            string path = $"{tempFolder}/{name}";

            File.SetAttributes(path, FileAttributes.Normal);
            File.Delete(path);

            return Task.CompletedTask;

        }
    }
}
