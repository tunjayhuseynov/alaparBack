using AlApar.Classes.Service;
using AlApar.Models.Service;
using AlApar.Models.Service.Views;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Service
{
    public class ServiceCrud : Common<ViewServiceAd, ServiceContext, Form, ServiceAd, ServiceLog, ServiceContact, ServicePhoto, ServiceCategory>, IServiceCrud
    {
        public override string TempFolder => "images/service/temporarily";
        public override string MainFolder => "images/service/personal";

        public override Func<ServiceContext, int?, int, int, IAsyncEnumerable<ViewServiceAd>> FilterQuery => EF.CompileAsyncQuery((ServiceContext db, int? id, int skip, int take) => db.ViewServiceAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip));
        public override async Task<object> getForm(ServiceContext db)
        {

            var category = await db.ServiceCategories.AsNoTracking().ToListAsync();

            var type = await db.ServiceTypes.AsNoTracking().ToListAsync();

            var cities = await db.Cities.AsNoTracking().ToListAsync();

            var currency = await db.Currencies.AsNoTracking().ToListAsync();

            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();


            return new
            {
                category = category.Select(w => new { w.Id, w.Name, w.New, w.Delivery, w.LabelName ,TypeList = type.Where(s => s.CategoryId == w.Id) }),
                cities,
                currency,
                sharedDate
            };
        }

    }
}
