using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class BinaRentPaymentTypes
    {
        public BinaRentPaymentTypes()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int RentId { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual SellTypes SellType { get; set; }
    }
}
