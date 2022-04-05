using AlApar.Classes;
using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Service
{
    public partial class ServiceAd : CommonAds
    {
        public ServiceAd()
        {
            ServicePhotos = new HashSet<ServicePhoto>();
            ServiceStories = new HashSet<ServiceStory>();
        }

        public int? CategoryId { get; set; }
        public string Title { get; set; }
        public int? TypeId { get; set; }
        public bool? IsNew { get; set; }
        public bool? HasDelivery { get; set; }
        public int? CityId { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public string About { get; set; }


        public virtual ServiceCategory Category { get; set; }
        public virtual ServiceContact Contact { get; set; }
        public virtual ServiceLog Log { get; set; }
        public virtual ServiceType Type { get; set; }
        public virtual ICollection<ServicePhoto> ServicePhotos { get; set; }

        [InverseProperty("Ad")]
        public virtual ICollection<ServiceStory> ServiceStories { get; set; }
        public virtual Cities City { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AdStatuses Status { get; set; }
    }
}
