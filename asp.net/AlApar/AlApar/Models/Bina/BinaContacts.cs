using System;
using System.Collections.Generic;

namespace AlApar.Models.Bina
{
    public partial class BinaContacts
    {
        public BinaContacts()
        {
            BinaAdsPersonal = new HashSet<BinaAds>();
        }

        public int Id { get; set; }
        public string ContactNumber { get; set; }
        public string Name { get; set; }
        public bool? IsCall { get; set; }
        public bool? IsWp { get; set; }
        public string Email { get; set; }
        public bool? Owner { get; set; }
        public DateTime Timespan { get; set; } = DateTime.UtcNow;

        public virtual ICollection<BinaAds> BinaAdsPersonal { get; set; }
    }
}
