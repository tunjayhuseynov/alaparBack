using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models.Animal
{
    public partial class AnimalAd : CommonAds
    {
        public AnimalAd()
        {
            AnimalPhotos = new HashSet<AnimalPhoto>();
            AnimalStories = new HashSet<AnimalStory>();
        }

        public int? CategoryId { get; set; }
        public int? GeneraId { get; set; }
        public int? TypeId { get; set; }
        public bool? HasDelivery { get; set; }
        public string Title { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public int? CityId { get; set; }
        public string About { get; set; }


        public virtual AnimalCategory Category { get; set; }
        public virtual AnimalContact Contact { get; set; }
        public virtual AnimalGenera Genera { get; set; }
        public virtual AnimalLog Log { get; set; }
        public virtual AnimalType Type { get; set; }
        public virtual Cities City { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AdStatuses Status { get; set; }

        [InverseProperty("Ad")]
        public virtual ICollection<AnimalStory> AnimalStories { get; set; }
        public virtual ICollection<AnimalPhoto> AnimalPhotos { get; set; }
    }
}
