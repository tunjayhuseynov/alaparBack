using System;
using System.Collections.Generic;

namespace AlApar.Models.Bina
{
    public partial class BinaLandAppointments
    {
        public BinaLandAppointments()
        {
            BinaAdsPersonal = new HashSet<BinaAds>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BinaAds> BinaAdsPersonal { get; set; }
    }
}
