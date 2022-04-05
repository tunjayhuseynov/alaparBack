using AlApar.Classes;
using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivateAd : CommonAds
    {
        public PrivateAd()
        {
            PrivatePhotos = new HashSet<PrivatePhoto>();
            PrivateStories = new HashSet<PrivateStory>();
        }

        public int? CategoryId { get; set; }
        public int? ClothesGenderId { get; set; }
        public int? ClothesTypeId { get; set; }
        public int? TypeId { get; set; }
        public bool? IsNew { get; set; }
        public bool? HasDelivery { get; set; }
        public string Title { get; set; }
        public int? CityId { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public string About { get; set; }


        [Column("colorId")]
        public int? ColorId { get; set; }
        [ForeignKey("ColorId")]
        public virtual ClothesColors ClothesColor { get; set; }

        [Column("shoesSizeId")]
        public int? ShoesSizeId { get; set; }
        [ForeignKey("ShoesSizeId")]
        public virtual ShoesSizes ShoesSize { get; set; }


        [Column("clothesSizeId")]
        public int? ClothesSizeId { get; set; }
        [ForeignKey("ClothesSizeId")]
        public virtual ClothesSizes ClothesSize { get; set; }

        public virtual PrivateCategory Category { get; set; }
        public virtual PrivateClothesGender ClothesGender { get; set; }
        public virtual PrivateClothesType ClothesType { get; set; }
        public virtual PrivateContact Contact { get; set; }
        public virtual PrivateLog Log { get; set; }
        public virtual PrivateType Type { get; set; }
        public virtual Cities City { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AdStatuses Status { get; set; }
        public virtual ICollection<PrivatePhoto> PrivatePhotos { get; set; }

        [InverseProperty("Ad")]
        public virtual ICollection<PrivateStory> PrivateStories { get; set; }
    }
}
