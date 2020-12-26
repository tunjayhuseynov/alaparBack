using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class BinaCategories
    {
        public BinaCategories()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool FloorAmount { get; set; }
        public bool RoomAmount { get; set; }
        public bool Floor { get; set; }
        public bool LandAppointment { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
    }
}
