using AlApar.Classes;
using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Hobby
{
    public partial class HobbyAd : CommonAds
    {
        public HobbyAd()
        {
            HobbyStories = new HashSet<HobbyStory>();
            HobbyPhotos = new HashSet<HobbyPhoto>();
        }

        public int? CategoryId { get; set; }
        public int? TypeId { get; set; }
        public string Title { get; set; }
        public int? CityId { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public string About { get; set; }
        public bool? IsNew { get; set; }
        public bool? HasDelivery { get; set; }


        public virtual HobbyCategory Category { get; set; }
        public virtual HobbyLog Log { get; set; }
        public virtual HobbyType Type { get; set; }
        public virtual HobbyContact Contact { get; set; }

        public virtual Cities City { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AdStatuses Status { get; set; }

        [InverseProperty("Ad")]
        public virtual ICollection<HobbyStory> HobbyStories { get; set; }
        
        [InverseProperty("Ad")]
        public virtual ICollection<HobbyPhoto> HobbyPhotos { get; set; }
    }
}
