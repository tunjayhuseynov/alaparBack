using AlApar.Models.Bina;
using AlApar.Models.Job;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models
{
    public partial class Regions
    {
        public Regions()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
            Villages = new HashSet<Villages>();
            JobAds = new HashSet<JobAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int cityId { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual ICollection<Villages> Villages { get; set; }

        [InverseProperty("Region")]

        public virtual ICollection<JobAd> JobAds { get; set; }

        public virtual Cities City { get; set; }
    }
}
