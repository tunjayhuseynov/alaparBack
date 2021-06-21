using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobEducation
    {
        public JobEducation()
        {
            JobAds = new HashSet<JobAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<JobAd> JobAds { get; set; }
    }
}
