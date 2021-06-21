using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobLog
    {
        public JobLog()
        {
            JobAds = new HashSet<JobAd>();
        }

        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;
        public DateTime? FromDate { get; set; } = DateTime.UtcNow;
        public DateTime? TillDate { get; set; } = DateTime.UtcNow.AddMonths(1);

        public virtual ICollection<JobAd> JobAds { get; set; }
    }
}
