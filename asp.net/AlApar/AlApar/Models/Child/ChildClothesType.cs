using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildClothesType
    {
        public ChildClothesType()
        {
            ChildAds = new HashSet<ChildAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? ClothesGenderId { get; set; }

        public virtual ChildClothesGender ClothesGender { get; set; }
        public virtual ICollection<ChildAd> ChildAds { get; set; }
    }
}
