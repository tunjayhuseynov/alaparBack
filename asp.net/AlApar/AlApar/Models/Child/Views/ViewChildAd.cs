using AlApar.Classes;
using AlApar.Models.View;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Child.Views
{
    public partial class ViewChildAd : CommonViewProperities, TView<ChildPhoto>
    {
        public long Id { get; set; }
        public string PackageName { get; set; }
        public string StatusName { get; set; }
        public string CategoryName { get; set; }
            
        [Column("colorId")]
        public int? ColorId { get; set; }
        
        [Column("colorName")]
        public string ColorName { get; set; }
        
        [Column("shoesSizeId")]
        public int? ShoesSizeId { get; set; }

        [Column("shoesSizeName")]
        public string ShoesSizeName { get; set; }
        
        [Column("clothesSizeId")]
        public int? ClothesSizeId { get; set; }
        
        [Column("clothesSizeName")]
        public string ClothesSizeName { get; set; }

        [Column("cityName")]
        public string CityName { get; set; }




        public int? Viewed { get; set; }
        public int? CategoryId { get; set; }
        public string CurrencyName { get; set; }
        public string TypeName { get; set; }
        public string ClothesTypeName { get; set; }
        public string ContactName { get; set; }
        public string Email { get; set; }
        public bool? IsWp { get; set; }
        public bool? IsCall { get; set; }
        public string ContactNumber { get; set; }
        public string ClothesGenderName { get; set; }
        public string About { get; set; }
        public double? Price { get; set; }
        public string Title { get; set; }
        public bool? HasDelivery { get; set; }
        public bool? IsNew { get; set; }

        public int? StatusId { get; set; }
        public int? CurrencyId { get; set; }
        public int? CityId { get; set; }
        public int? ContactId { get; set; }
        public int? ClothesGenderId { get; set; }
        public int? ClothesTypeId { get; set; }
        public int? TypeId { get; set; }

        public virtual ICollection<ChildPhoto> Images { get; set; }
    }
}
