using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivateClothesGender
    {
        public PrivateClothesGender()
        {
            PrivateAds = new HashSet<PrivateAd>();
            PrivateClothesTypes = new HashSet<PrivateClothesType>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }

        public virtual PrivateCategory Category { get; set; }
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
        public virtual ICollection<PrivateClothesType> PrivateClothesTypes { get; set; }
    }
}
