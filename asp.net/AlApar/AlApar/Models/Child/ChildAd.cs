using AlApar.Classes;
using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildAd : CommonAds
    {
        public ChildAd()
        {
            ChildPhotos = new HashSet<ChildPhoto>();
            ChildStories = new HashSet<ChildStory>();
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


        [Column("clothesSizeId")]
        public int? ClothesSizeId { get; set; }

        [Column("shoesSizeId")]
        public int? ShoesSizeId { get; set; }

        [Column("colorId")]
        public int? ColorId { get; set; }


        [ForeignKey("ColorId")]
        public virtual ClothesColors ClothesColor { get; set; }

        [ForeignKey("ShoesSizeId")]
        public virtual ShoesSizes ShoesSize { get; set; }

        [ForeignKey("ClothesSizeId")]
        public virtual ClothesSizes ClothesSize { get; set; }

        public virtual ChildCategory Category { get; set; }
        public virtual ChildClothesGender ClothesGender { get; set; }
        public virtual ChildClothesType ClothesType { get; set; }
        public virtual ChildContact Contact { get; set; }
        public virtual ChildLog Log { get; set; }
        public virtual ChildType Type { get; set; }
        public virtual Cities City { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AdStatuses Status { get; set; }
        public virtual ICollection<ChildPhoto> ChildPhotos { get; set; }

        [InverseProperty("Ad")]
        public virtual ICollection<ChildStory> ChildStories { get; set; }
    }
}
