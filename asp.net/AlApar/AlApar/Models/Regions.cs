using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class Regions
    {
        public Regions()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
            Villages = new HashSet<Villages>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int cityId { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual ICollection<Villages> Villages { get; set; }

        public virtual Cities City { get; set; }
    }
}
