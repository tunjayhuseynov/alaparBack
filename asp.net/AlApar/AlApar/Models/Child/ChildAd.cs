using AlApar.Classes;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildAd
    {
        public ChildAd()
        {
            ChildPhotos = new HashSet<ChildPhoto>();
        }

        public long Id { get; set; }
        public string PrivateId { get; set; }
        public int? Viewed { get; set; }
        public int? LogId { get; set; }
        public int? StatusId { get; set; }
        public int? PackageId { get; set; }
        public int? CategoryId { get; set; }
        public int? ClothesGenderId { get; set; }
        public int? ClothesTypeId { get; set; }
        public int? TypeId { get; set; }
        public bool? IsNew { get; set; }
        public bool? HasDelivery { get; set; }
        public string Title { get; set; }
        public int? ContactId { get; set; }
        public int? CityId { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public string About { get; set; }

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
    }
}
