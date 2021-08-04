using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

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

        [Column("clothesColor")]
        public bool? ClothesColor { get; set; }

        [Column("shoesSize")]
        public bool? ShoesSize { get; set; }

        [Column("clothesSize")]
        public bool? ClothesSize { get; set; }

        public virtual PrivateClothesGender ClothesGender { get; set; }
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
    }
}
