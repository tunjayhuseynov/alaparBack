using AlApar.Models.Auto;
using AlApar.Repositories;
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
using static AlApar.Repositories.Status;

namespace AlApar.Classes
{
    public class Utility : IUtility
    {
        private enum LastTimes
        {
            Day = 1,
            Week = 2,
            Month = 3
        }

        public List<string> ImageTypes
        {
            get => new List<string> {
            "image/jpeg",
            "image/png"
        };
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

        public Task ImageSaver(List<string> images, string tempFolder, string mainFolder, int folderId, IWebHostEnvironment _webHostEnvironment)
        {
            tempFolder = Path.Combine(_webHostEnvironment.WebRootPath, tempFolder);
            mainFolder = Path.Combine(_webHostEnvironment.WebRootPath, mainFolder);

            foreach (var item in images)
            {
                if (File.Exists($"{tempFolder}/{item}"))
                {
                    if (!Directory.Exists($"{mainFolder}/{folderId}"))
                    {
                        Directory.CreateDirectory($"{mainFolder}/{folderId}");
                    }

                    File.Move($"{tempFolder}/{item}", $"{mainFolder}/{folderId}/{item}", true);

                    Image img = Image.FromFile($"{mainFolder}/{folderId}/{item}");
                    Size tumbSize = GetThumbnailSize(img);

                    Image thumbnail = img.GetThumbnailImage(tumbSize.Width, tumbSize.Height, null, IntPtr.Zero);

                    thumbnail.Save($"{mainFolder}/{folderId}/thumb-{item}");
                }
                else
                {
                    throw new Exception("Image does not exist in the Temp Folder");
                }
            }

            return Task.CompletedTask;
        }

        public async Task<object> SaveTempImage(IFormFile image, string TempFolder, IWebHostEnvironment _webHostEnvironment)
        {
            if (image != null && ImageTypes.Contains(image.ContentType))
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


        public T GetAttributes<T>(PropertyInfo prop) where T : Attribute
        {
            return (T)prop.GetCustomAttribute(typeof(T), true);
        }

        public bool CheckFilterProperties<T, C>(FilterCheckAttribute attr, T form, C model) where T : class where C : class
        {
            object rawValue = form.GetType().GetProperty(attr.SelfName).GetValue(form);
            object rawModelValue = model.GetType().GetProperty(attr.Target).GetValue(model);

            if (rawValue != null && rawModelValue != null)
            {
                double value = Convert.ToDouble(rawValue);
                double modelValue = Convert.ToDouble(rawModelValue);

                if (attr.Type == TypeEnum.Min)
                {
                    return modelValue >= value;
                }
                else if (attr.Type == TypeEnum.Max)
                {
                    return modelValue <= value;
                }
            }

            return true;
        }

        public Task deleteTempImage(string name, string TempFolder, IWebHostEnvironment _webHostEnvironment)
        {
            string tempFolder = Path.Combine(_webHostEnvironment.WebRootPath, TempFolder);
            string path = $"{tempFolder}/{name}";

            File.SetAttributes(path, FileAttributes.Normal);
            File.Delete(path);

            return Task.CompletedTask;
        }

        //public Task loadLog<T>(T model) where T : class
        //{
        //    model.GetType().GetProperty("CreatedDate").SetValue(model, DateTime.UtcNow);
        //    model.GetType().GetProperty("ModifiedDate").SetValue(model, DateTime.UtcNow);
        //    model.GetType().GetProperty("FromDate").SetValue(model, DateTime.UtcNow);
        //    model.GetType().GetProperty("TillDate").SetValue(model, DateTime.UtcNow.AddMonths(1));

        //    return Task.CompletedTask;
        //}

        public Task loadAdInstance<T>(T adInstance, int logId, int contactId, string contactName) where T : class
        {
            adInstance.GetType().GetProperty("PrivateId").SetValue(adInstance, new Random().Next(100000000, 1000000000).ToString("D9"));
            adInstance.GetType().GetProperty("LogId").SetValue(adInstance, logId);
            adInstance.GetType().GetProperty("Viewed").SetValue(adInstance, 0);
            adInstance.GetType().GetProperty("StatusId").SetValue(adInstance, (int)Status.AdStatus.Pending);
            adInstance.GetType().GetProperty("PackageId").SetValue(adInstance, (int)Status.AdPackage.Standart);
            adInstance.GetType().GetProperty(contactName).SetValue(adInstance, contactId);

            return Task.CompletedTask;
        }

        public async Task add2Db<A, C, L, D, F, P>(D db, F form, string contactIdName, string TempFolder, string MainFolder, IWebHostEnvironment _webHostEnvironment, Func<A, C, L, F, Task> extra = null)
            where A : class, new() // Ad Instance
            where C : class, new() // Contact
            where L : class, new() // Logs
            where D : DbContext
            where F : class, new() // Form class
            where P : class, new() // Images
        {
            A adInstance = new A();
            C contacts = new C();
            L logs = new L();

            //await loadLog(logs); because we use default values in MC

            string tempFolder = Path.Combine(_webHostEnvironment.WebRootPath, TempFolder);
            string mainFolder = Path.Combine(_webHostEnvironment.WebRootPath, MainFolder);

            foreach (var item in new F().GetType().GetProperties())
            {
                if (item.GetValue(form) != null && adInstance.GetType().GetProperty(item.Name) != null)
                {
                    adInstance.GetType().GetProperty(item.Name).SetValue(adInstance, item.GetValue(form));
                }
                else if (item.GetValue(form) != null && contacts.GetType().GetProperty(item.Name) != null)
                {
                    contacts.GetType().GetProperty(item.Name).SetValue(contacts, item.GetValue(form));
                }
            }

            await db.AddAsync(contacts);
            await db.AddAsync(logs);
            await db.SaveChangesAsync();

            await loadAdInstance(adInstance, (int)logs.GetType().GetProperty("Id").GetValue(logs),
                (int)contacts.GetType().GetProperty("Id").GetValue(contacts), contactIdName);


            if (extra != null)
            {
                await extra(adInstance, contacts, logs, form);
            }

            await db.AddAsync(adInstance);
            await db.SaveChangesAsync();

            List<string> imageNames = (List<string>)form.GetType().GetProperty("ImageList").GetValue(form);
            int adInstanceId = (int)adInstance.GetType().GetProperty("Id").GetValue(adInstance);

            await ImageSaver(imageNames, TempFolder, MainFolder, adInstanceId, _webHostEnvironment);

            await db.AddRangeAsync(
                imageNames
                .Select((w, i) =>
                {
                    var imageInstace = new P();
                    imageInstace.GetType().GetProperty("AdId").SetValue(imageInstace, adInstanceId);
                    imageInstace.GetType().GetProperty("ImagePath").SetValue(imageInstace, $"/{MainFolder}/{adInstanceId}/{w}");
                    imageInstace.GetType().GetProperty("PrimaryImage").SetValue(imageInstace, i);
                    imageInstace.GetType().GetProperty("Thumbnail").SetValue(imageInstace, $"/{MainFolder}/{adInstanceId}/thumb-{w}");

                    return imageInstace;
                })
            );

            await db.SaveChangesAsync();
        }

        public async Task<object> PostFilter<F, C, V, A>(F res, C db, string firstSearchBy, int skip, int take, Func<C, int?, int, int, IAsyncEnumerable<V>> query, Func<V, bool> extra = null)
            where F : class, new()
            where C : class, new()
            where V : class, new()
            where A : class, new()
        {
            List<V> result = new List<V>();
            Dictionary<PropertyInfo, object> store = new Dictionary<PropertyInfo, object>();

            List<FilterCheckAttribute> filters = new();

            PropertyInfo[] propertyInfos = new F().GetType().GetProperties();


            if (propertyInfos.Count() > 0)
            {
                foreach (var item in propertyInfos)
                {
                    if (item.GetValue(res) != null)
                    {
                        if (new V().GetType().GetProperty(item.Name) != null)
                        {
                            store.Add(item, item.GetValue(res));
                        }

                        var filterRes = GetAttributes<FilterCheckAttribute>(item);
                        if (filterRes != null)
                        {
                            filters.Add(filterRes);
                        }
                    }
                }
            }

            var list = query(db, (int?)res.GetType().GetProperty(firstSearchBy).GetValue(res), skip, take);
            await foreach (var item in list)
            {
                foreach (FilterCheckAttribute filter in filters)
                {
                    if (!CheckFilterProperties(filter, res, item)) goto SkipLoop;
                }

                if (res.GetType().GetProperty("SharedDate").GetValue(res) != null)
                {
                    if (item.GetType().GetProperty("ModifiedDate").GetValue(item) is not null)
                    {
                        DateTime modifiedDate = ((DateTime?)item.GetType().GetProperty("ModifiedDate").GetValue(item)).Value;

                        DateTime comparableTime = (int)res.GetType().GetProperty("SharedDate").GetValue(res) switch
                        {
                            (int)LastTimes.Day => modifiedDate.AddDays(1),
                            (int)LastTimes.Week => modifiedDate.AddDays(7),
                            (int)LastTimes.Month => modifiedDate.AddMonths(1),
                            _ => throw new NotImplementedException()
                        };

                        if (comparableTime < DateTime.UtcNow) continue;

                    }
                }

                if (extra is not null)
                {
                    if (!extra(item))
                    {
                        continue;
                    }
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

            SkipLoop:
                continue;
            }

            return result;
        }
    }
}
