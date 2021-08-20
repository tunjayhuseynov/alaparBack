using AlApar.Classes;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobCategory : TCategory
    {
        public JobCategory()
        {
            JobAds = new HashSet<JobAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }


        public virtual ICollection<JobAd> JobAds { get; set; }
    }
}
