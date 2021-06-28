using AlApar.Classes;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivateCategory : TCategory
    {
        public PrivateCategory()
        {
            PrivateAds = new HashSet<PrivateAd>();
            PrivateClothesGenders = new HashSet<PrivateClothesGender>();
            PrivateTypes = new HashSet<PrivateType>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? New { get; set; }
        public bool? Delivery { get; set; }

        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
        public virtual ICollection<PrivateClothesGender> PrivateClothesGenders { get; set; }
        public virtual ICollection<PrivateType> PrivateTypes { get; set; }
    }
}
