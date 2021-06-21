using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivateClothesType
    {
        public PrivateClothesType()
        {
            PrivateAds = new HashSet<PrivateAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? ClothesGenderId { get; set; }

        public virtual PrivateClothesGender ClothesGender { get; set; }
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
    }
}
