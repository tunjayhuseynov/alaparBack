using AlApar.Classes;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Hobby.Views
{
    public partial class ViewHobbyAd : TView<HobbyPhoto>
    {
        public long Id { get; set; }
        public int? Viewed { get; set; }
        public int? StatusId { get; set; }
        public int? PackageId { get; set; }
        public int? CategoryId { get; set; }
        public int? TypeId { get; set; }
        public string Title { get; set; }
        public int? CityId { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public string About { get; set; }
        public bool? IsNew { get; set; }
        public bool? HasDelivery { get; set; }
        public string PackageName { get; set; }
        public string CurrencyName { get; set; }
        public string ContactNumber { get; set; }
        public bool? IsCall { get; set; }
        public bool? IsWp { get; set; }
        public string Email { get; set; }
        public string ContactName { get; set; }
        public string CategoryName { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string TypeName { get; set; }
        public string CityName { get; set; }
        public string StatusName { get; set; }
        public int? LogId { get; set; }
        public int? ContactId { get; set; }

        public virtual ICollection<HobbyPhoto> Images { get; set; }

    }
}
