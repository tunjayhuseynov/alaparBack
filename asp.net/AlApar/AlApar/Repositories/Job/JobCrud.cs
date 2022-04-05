using AlApar.Classes.Job;
using AlApar.Models;
using AlApar.Models.Job;
using AlApar.Models.Job.Views;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Job
{
    public class JobCrud : Common<ViewJobAds, JobContext, Form, JobAd, JobLog, JobContact, JobEmployeePhoto, JobCategory, JobStory>, IJobCrud
    {
        public override string TempFolder => "images/job/temporarily";
        public override string MainFolder => "images/job/personal";

        public override Func<JobContext, int?, int, int, IAsyncEnumerable<ViewJobAds>> FilterQuery => EF.CompileAsyncQuery((JobContext db, int? id, int skip, int take) => db.ViewJobAds.Include(w => w.Images).AsNoTracking().AsNoTracking().Where(w => w.TypeId == id).OrderBy(w => w.ModifiedDate).Skip(skip));
        public override async Task<object> getForm(JobContext db)
        {
            var types = await db.JobAdTypes.AsNoTracking().ToListAsync();
            var categories = await db.JobCategories.AsNoTracking().ToListAsync();
            var educations = await db.JobEducations.AsNoTracking().ToListAsync();
            var practices = await db.JobPracticeDurations.AsNoTracking().ToListAsync();
            var cities = await db.Cities.AsNoTracking().ToListAsync();
            var sharedDate = await db.LastSharedTimes.AsNoTracking().ToListAsync();

            var regions = await db.Regions.AsNoTracking().ToListAsync();

            var villages = await db.Villages.AsNoTracking().ToListAsync();

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
                Regions = regions.Where(s => s.cityId == w.Id)
                                     .Select(regionSelect)
            };

            return new { 
                types,
                categories,
                educations,
                practices,
                cities = cities.Select(citySelect),
                sharedDate,
            };
        }

    }
}
