using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class Cities
    {
        public Cities()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }

        public virtual ICollection<Regions> Regions { get; set; }
        public virtual ICollection<Metros> Metros { get; set; }
    }
}
