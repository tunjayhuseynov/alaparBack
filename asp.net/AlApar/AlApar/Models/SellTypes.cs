using AlApar.Models.Bina;
using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class SellTypes
    {
        public SellTypes()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual ICollection<BinaRentPaymentTypes> RentPayment { get; set; }
    }
}
