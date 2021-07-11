using System;
using System.Collections.Generic;

namespace AlApar.Models.Animal
{
    public partial class AnimalAd
    {
        public AnimalAd()
        {
            AnimalPhotos = new HashSet<AnimalPhoto>();
        }

        public long Id { get; set; }
        public string PrivateId { get; set; }
        public int? Viewed { get; set; }
        public int? LogId { get; set; }
        public int? StatusId { get; set; }
        public int? PackageId { get; set; }
        public int? CategoryId { get; set; }
        public int? GeneraId { get; set; }
        public int? TypeId { get; set; }
        public bool? HasDelivery { get; set; }
        public string Title { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public int? CityId { get; set; }
        public string About { get; set; }
        public int? ContactId { get; set; }

        public virtual AnimalCategory Category { get; set; }
        public virtual AnimalContact Contact { get; set; }
        public virtual AnimalGenera Genera { get; set; }
        public virtual AnimalLog Log { get; set; }
        public virtual AnimalType Type { get; set; }
        public virtual Cities City { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AdStatuses Status { get; set; }
        public virtual ICollection<AnimalPhoto> AnimalPhotos { get; set; }
    }
}
