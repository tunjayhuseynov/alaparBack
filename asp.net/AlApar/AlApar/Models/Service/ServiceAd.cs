using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Service
{
    public partial class ServiceAd
    {
        public ServiceAd()
        {
            ServicePhotos = new HashSet<ServicePhoto>();
        }

        public int Id { get; set; }
        public string PrivateId { get; set; }
        public int? Viewed { get; set; }
        public int? LogId { get; set; }
        public int? StatusId { get; set; }
        public int? PackageId { get; set; }
        public int? CategoryId { get; set; }
        public string Title { get; set; }
        public int? TypeId { get; set; }
        public bool? IsNew { get; set; }
        public bool? HasDelivery { get; set; }
        public int? CityId { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public string About { get; set; }
        public int? ContactId { get; set; }

        public virtual ServiceCategory Category { get; set; }
        public virtual ServiceContact Contact { get; set; }
        public virtual ServiceLog Log { get; set; }
        public virtual ServiceType Type { get; set; }
        public virtual ICollection<ServicePhoto> ServicePhotos { get; set; }
        public virtual Cities City { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AdStatuses Status { get; set; }
    }
}
