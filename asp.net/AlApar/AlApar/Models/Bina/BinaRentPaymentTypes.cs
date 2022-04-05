using System;
using System.Collections.Generic;

namespace AlApar.Models.Bina
{
    public partial class BinaRentPaymentTypes
    {
        public BinaRentPaymentTypes()
        {
            BinaAdsPersonal = new HashSet<BinaAds>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int RentId { get; set; }

        public virtual ICollection<BinaAds> BinaAdsPersonal { get; set; }
        public virtual SellTypes SellType { get; set; }
    }
}
