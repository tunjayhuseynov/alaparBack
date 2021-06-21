using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobContact
    {
        public JobContact()
        {
            JobAds = new HashSet<JobAd>();
        }

        public int Id { get; set; }
        public bool? IsWp { get; set; }
        public string PhoneNumber1 { get; set; }
        public string PhoneNumber2 { get; set; }
        public string PhoneNumber3 { get; set; }
        public string PhoneNumber4 { get; set; }
        public string Email { get; set; }
        public DateTime? Timespan { get; set; } = DateTime.UtcNow;

        public virtual ICollection<JobAd> JobAds { get; set; }
    }
}
