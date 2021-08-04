using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

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

        [Column("clothesColor")]
        public bool? ClothesColor { get; set; }
        
        [Column("shoesSize")]
        public bool? ShoesSize { get; set; }

        [Column("clothesSize")]
        public bool? ClothesSize { get; set; }

        public virtual ChildClothesGender ClothesGender { get; set; }
        public virtual ICollection<ChildAd> ChildAds { get; set; }
    }
}
