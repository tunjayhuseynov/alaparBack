using AlApar.Models.Bina;
using AlApar.Models.Job;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models
{
    public partial class Villages
    {
        public Villages()
        {
            BinaAdsPersonal = new HashSet<BinaAds>();
            JobAds = new HashSet<JobAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? RegionId { get; set; }

        public virtual Regions Region { get; set; }
        public virtual ICollection<BinaAds> BinaAdsPersonal { get; set; }

        [InverseProperty("Village")]
        public virtual ICollection<JobAd> JobAds { get; set; }

    }
}
