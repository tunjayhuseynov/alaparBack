using AlApar.Classes;
using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Home
{
    public partial class HomeAd : CommonAds
    {
        public HomeAd()
        {
            HomePhotos = new HashSet<HomePhoto>();
            HomeStories = new HashSet<HomeStory>();
        }

        public string Title { get; set; }
        public int? CategoryId { get; set; }
        public int? TypeId { get; set; }
        public int? CityId { get; set; }
        public bool? HasDelivery { get; set; }
        public bool? IsNew { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public string About { get; set; }


        public virtual HomeCategory Category { get; set; }
        public virtual HomeContact Contact { get; set; }
        public virtual HomeLog Log { get; set; }
        public virtual HomeType Type { get; set; }
        public virtual ICollection<HomePhoto> HomePhotos { get; set; }

        [InverseProperty("Ad")]
        public virtual ICollection<HomeStory> HomeStories { get; set; }
        public virtual Cities City { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AdStatuses Status { get; set; }
        public virtual Currency Currency { get; set; }
    }
}
