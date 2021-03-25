using AlApar.Models.Auto;
using AlApar.Models.Bina;
using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class AdPackages
    {
        public AdPackages()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
            AutoAds = new HashSet<AutoAds>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual ICollection<AutoAds> AutoAds { get; set; }
    }
}
