using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class AdStatuses
    {
        public AdStatuses()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
    }
}
