using AlApar.Repositories;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Dynamic;
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

        public enum DbCharNames
        {
            Child = 'c',
            Private = 'p'
        }


        public List<string> ImageTypes
        {
            get => new List<string> {
            "image/jpeg",
            "image/png"
            };
        }

        public List<string> ImageExtensions
        {
            get => new List<string>
            {
                ".png",
                ".jpg",
                ".jpeg"
            };
        }

        public Size GetThumbnailSize(Image original, int maxPixel)
        {
            // Maximum size of any dimension.
            int maxPixels = maxPixel;

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

        public ImageCodecInfo jpgEncoder;
        public Task ImageSaver(List<ImageStructure> images, string tempFolder, string mainFolder, long folderId, IWebHostEnvironment _webHostEnvironment)
        {
            tempFolder = Path.Combine(_webHostEnvironment.WebRootPath, tempFolder);
            mainFolder = Path.Combine(_webHostEnvironment.WebRootPath, mainFolder);

            foreach (var item in images)
            {
                if (File.Exists($"{tempFolder}/{item.FileName}"))
                {
                    if (!Directory.Exists($"{mainFolder}/{folderId}"))
                    {
                        Directory.CreateDirectory($"{mainFolder}/{folderId}");
                    }

                    Image orgimg = Image.FromFile($"{tempFolder}/{item.FileName}");

                    double rot = Math.Truncate(((double)item.Rotation) / 360.0) - (((double)item.Rotation) / 360.0);
                    switch (rot)
                    {
                        case -0.25 or 0.75:
                            orgimg.RotateFlip(RotateFlipType.Rotate90FlipNone);
                            break;
                        case 0.5 or -0.5:
                            orgimg.RotateFlip(RotateFlipType.Rotate180FlipNone);
                            break;
                        case 0.25 or -0.75:
                            orgimg.RotateFlip(RotateFlipType.Rotate270FlipNone);
                            break;
                        default:
                            break;
                    }

                    orgimg.Save($"{mainFolder}/{folderId}/{item.FileName}");
                    orgimg.Dispose();

                    File.SetAttributes($"{tempFolder}/{item.FileName}", FileAttributes.Normal);
                    File.Delete($"{tempFolder}/{item.FileName}");

                    Image img = Image.FromFile($"{mainFolder}/{folderId}/{item.FileName}");


                    Size tumbSize = GetThumbnailSize(img, 500);
                    Size blurSize = GetThumbnailSize(img, 10);

                    Image thumbnail = img.GetThumbnailImage(tumbSize.Width, tumbSize.Height, null, IntPtr.Zero);





                    if (item.FileName.Contains(".jpg") || item.FileName.Contains(".jpeg"))
                    {
                        jpgEncoder = GetEncoder(ImageFormat.Jpeg);
                    }
                    else if (item.FileName.Contains(".png"))
                    {
                        jpgEncoder = GetEncoder(ImageFormat.Png);
                    }

                    Encoder myEncoder = Encoder.Quality;

                    EncoderParameters myEncoderParameters = new EncoderParameters(1);

                    EncoderParameter myEncoderParameter = new EncoderParameter(myEncoder, 1L);
                    myEncoderParameters.Param[0] = myEncoderParameter;

                    thumbnail.Save($"{mainFolder}/{folderId}/thumb-{item.FileName}");
                    thumbnail.Save($"{mainFolder}/{folderId}/blur-{item.FileName}", jpgEncoder, myEncoderParameters);
                }
                else
                {
                    throw new Exception("Image does not exist in the Temp Folder");
                }
            }

            return Task.CompletedTask;
        }

        private ImageCodecInfo GetEncoder(ImageFormat format)
        {
            ImageCodecInfo[] codecs = ImageCodecInfo.GetImageEncoders();
            foreach (ImageCodecInfo codec in codecs)
            {
                if (codec.FormatID == format.Guid)
                {
                    return codec;
                }
            }
            return null;
        }

        public async Task<object> SaveTempImage(IFormFile image, string TempFolder, IWebHostEnvironment _webHostEnvironment)
        {
            if (image != null && ImageTypes.Contains(image.ContentType) && ImageExtensions.Contains(Path.GetExtension(image.FileName)))
            {
                string folder = Path.Combine(_webHostEnvironment.WebRootPath, TempFolder);

                if (!Directory.Exists($"{folder}"))
                {
                    Directory.CreateDirectory($"{folder}");
                }

                string uniqueName = $@"{Guid.NewGuid()}{Path.GetExtension(image.FileName)}";
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

        public bool CheckFilterProperties<Form, View, Context, Currency>(FilterCheckAttribute attr, Form form, View view, Context db, List<Currency> currencyList) where Form : class where View : class where Context : DbContext where Currency : class, TCurrency, new()
        {
            object rawValue = form.GetType().GetProperty(attr.SelfName).GetValue(form);
            object rawModelValue = view.GetType().GetProperty(attr.Target).GetValue(view);

            CurrencyConverterAttribute currencyAttr = GetAttributes<CurrencyConverterAttribute>(form.GetType().GetProperty(attr.SelfName));


            if (rawValue != null && rawModelValue != null)
            {
                if (attr.Type == TypeEnum.Text) { 
                    string textvalue = ((string)rawValue).ToLower();
                    string viewtextvalue = ((string)rawModelValue).ToLower();
                    return viewtextvalue.Contains(textvalue);
                }

                if (attr.Type == TypeEnum.Multiple) {
                    List<int> multiplevalue = (List<int>)rawValue;
                    int? adValue = Convert.ToInt32(rawModelValue);
                    return multiplevalue.Count == 0 ? true : multiplevalue.Contains(adValue??0);
                }

                double? value = Convert.ToDouble(rawValue);
                double? modelValue = Convert.ToDouble(rawModelValue);

                if (currencyAttr != null)
                {
                    object currencyIdForm = form.GetType().GetProperty(currencyAttr.CurrencyFormPropertName).GetValue(form);
                    object currencyIdView = view.GetType().GetProperty(currencyAttr.CurrencyRealPropertName).GetValue(view);

                    if (currencyIdForm != null && currencyIdView != null)
                    {
                        value *= currencyList.Find(w => w.Id == Convert.ToInt32(currencyIdForm)).Rate;
                        modelValue *= currencyList.Find(w => w.Id == Convert.ToInt32(currencyIdView)).Rate;
                    }
                }

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


        public Task loadAdInstance<T>(T adInstance, int logId, int contactId) where T : class
        {
            adInstance.GetType().GetProperty("PrivateId").SetValue(adInstance, new Random().Next(100000000, 1000000000).ToString("D9"));
            adInstance.GetType().GetProperty("LogId").SetValue(adInstance, logId);
            adInstance.GetType().GetProperty("Viewed").SetValue(adInstance, 0);
            adInstance.GetType().GetProperty("StatusId").SetValue(adInstance, (int)Status.AdStatus.Pending);
            adInstance.GetType().GetProperty("PackageId").SetValue(adInstance, (int)Status.AdPackage.Standart);
            adInstance.GetType().GetProperty("ContactId").SetValue(adInstance, contactId);

            return Task.CompletedTask;
        }

        public async Task add2Db<AdModel, Contact, Log, Context, Form, Photos>(Context db, Form form, string TempFolder, string MainFolder, IWebHostEnvironment _webHostEnvironment, Func<AdModel, Contact, Log, Form, Task> extra = null)
            where AdModel : class, new() // Ad Instance
            where Contact : class, new() // Contact
            where Log : class, new() // Logs
            where Context : DbContext
            where Form : class, new() // Form class
            where Photos : class, new() // Images
        {
            AdModel adInstance = new AdModel();
            Contact contacts = new Contact();
            Log logs = new Log();

            //await loadLog(logs); because we use default values in MC

            string tempFolder = Path.Combine(_webHostEnvironment.WebRootPath, TempFolder);
            string mainFolder = Path.Combine(_webHostEnvironment.WebRootPath, MainFolder);

            using var transaction = await db.Database.BeginTransactionAsync();

            try
            {
                foreach (var item in new Form().GetType().GetProperties())
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
                    (int)contacts.GetType().GetProperty("Id").GetValue(contacts));


                if (extra != null)
                {
                    await extra(adInstance, contacts, logs, form);
                }

                await db.AddAsync(adInstance);
                await db.SaveChangesAsync();

                List<ImageStructure> imageNames = (List<ImageStructure>)form.GetType().GetProperty("ImageList").GetValue(form);
                long adInstanceId = (long)adInstance.GetType().GetProperty("Id").GetValue(adInstance);

                await ImageSaver(imageNames, TempFolder, MainFolder, adInstanceId, _webHostEnvironment);

                await db.AddRangeAsync(
                    imageNames
                    .Select((w, i) =>
                    {
                        var imageInstace = new Photos();
                        imageInstace.GetType().GetProperty("AdId").SetValue(imageInstace, adInstanceId);
                        imageInstace.GetType().GetProperty("ImagePath").SetValue(imageInstace, $"/{MainFolder}/{adInstanceId}/{w.FileName}");
                        imageInstace.GetType().GetProperty("PrimaryImage").SetValue(imageInstace, i);
                        imageInstace.GetType().GetProperty("Thumbnail").SetValue(imageInstace, $"/{MainFolder}/{adInstanceId}/thumb-{w.FileName}");
                        imageInstace.GetType().GetProperty("Blur").SetValue(imageInstace, Convert.ToBase64String(File.ReadAllBytes($"{mainFolder}/{adInstanceId}/blur-{w.FileName}")));
                        return imageInstace;
                    })
                );

                await db.SaveChangesAsync();

                await transaction.CommitAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                await transaction.RollbackAsync();
            }
        }

        public async Task<object> PostFilter<Form, Context, View, A, Currency>(Form res, Context db, string firstSearchBy, int skip, int take, Func<Context, int?, int, int, IAsyncEnumerable<View>> query, Func<View, Form, bool> extra = null)
            where Form : class, new()
            where Context : DbContext
            where View : class, new()
            where A : class, new()
            where Currency : class, TCurrency, new()
        {

            var currencyList = await db.Set<Currency>().ToListAsync();

            List<View> result = new List<View>();
            Dictionary<PropertyInfo, object> store = new Dictionary<PropertyInfo, object>();

            List<FilterCheckAttribute> filters = new();

            PropertyInfo[] propertyInfos = new Form().GetType().GetProperties();


            if (propertyInfos.Count() > 0)
            {
                foreach (var item in propertyInfos)
                {
                    if (item.GetValue(res) != null)
                    {
                        if (GetAttributes<BypassAttribute>(item) != null) continue;

                        if (new View().GetType().GetProperty(item.Name) != null)
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

            await foreach (var item in getItems(list))
            {

                foreach (FilterCheckAttribute filter in filters)
                {
                    if (!CheckFilterProperties(filter, res, item, db, currencyList)) goto SkipLoop;
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
                    if (!extra(item, res))
                    {
                        continue;
                    }
                }

                var key = store.Last().Key;

                foreach (var keyValue in store)
                {
                    if (item.GetType().GetProperty(keyValue.Key.Name).GetValue(item) != null && item.GetType().GetProperty(keyValue.Key.Name).GetValue(item).ToString() != keyValue.Value.ToString())
                    {
                        break;
                    }
                    if (key == keyValue.Key)
                    {
                        result.Add(item);
                    }
                }

                if (result.Count == take)
                    break;

            SkipLoop:
                continue;
            }

            return result.Any() ? result : null;
        }

        public async IAsyncEnumerable<View> getItems<View>(IAsyncEnumerable<View> query)
            where View : class, new()
        {
            await foreach (var item in query)
            {
                yield return item;
            }


        }
        public async Task<object> MainMenuStuffs<Category, View, Context, Photo>(Context context, int adListNumber)
            where Category : class, TCategory, new()
            where View : class, TView<Photo>, new()
            where Context : DbContext
        {
            var categories = await context.Set<Category>().ToListAsync();

            List<View> ads = new();


            foreach (var item in categories)
            {
                ads.AddRange(await context.Set<View>().AsNoTracking().Include(s => s.Images).Where((s) => s.CategoryId == item.Id).OrderBy(w => w.Id).Take(adListNumber).ToArrayAsync());
            }

            for (int i = 0; i < ads.Count; i++)
            {
                var prop = ads[i].GetType().GetProperty("About");

                if (prop != null)
                    prop.SetValue(ads[i], null);
            }

            return categories.Select(category => new { category, Ads = ads.Where(w => w.CategoryId == category.Id) });
        }

        public async Task<object> GetView<Context, View, Photo>(Context context, long id)
            where Context : DbContext where View : class, TView<Photo>, new()
        {
            return await context.Set<View>().Include(w => w.Images).FirstOrDefaultAsync(w => w.Id == id);
        }
    }

    public interface TCategory
    {
        public int Id { get; set; }
    }

    public interface TView<Image>
    {
        public long Id { get; set; }
        public int? CategoryId { get; set; }
        public ICollection<Image> Images { get; set; }
    }

    public interface TCurrency
    {
        public int Id { get; set; }
        public double? Rate { get; set; }
    }

    public class ImageStructure
    {
        [Newtonsoft.Json.JsonProperty("filename")]
        public string FileName { get; set; }

        [Newtonsoft.Json.JsonProperty("rotation")]
        public int Rotation { get; set; }
    }
}
