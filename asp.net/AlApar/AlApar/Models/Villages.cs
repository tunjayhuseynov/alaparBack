using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class Villages
    {
        public Villages()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? RegionId { get; set; }

        public virtual Regions Region { get; set; }
        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
    }
}
