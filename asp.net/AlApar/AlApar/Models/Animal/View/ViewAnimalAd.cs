using System;
using System.Collections.Generic;


namespace AlApar.Models.Animal.View
{
    public class ViewAnimalAd
    {
        public ViewAnimalAd()
        {
            Images = new HashSet<AnimalPhoto>();
        }
        public int Id { get; set; }
        public int? Viewed { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Name { get; set; }
        public string StatusName { get; set; }
        public string About { get; set; }
        public double? Price { get; set; }
        public string Title { get; set; }
        public bool? HasDelivery { get; set; }
        public string CategoryName { get; set; }
        public bool? Genera { get; set; }
        public bool? Type { get; set; }
        public string ContactNumber { get; set; }
        public bool? IsCall { get; set; }
        public bool? IsWp { get; set; }
        public string Email { get; set; }
        public string ContactName { get; set; }
        public string GeneraName { get; set; }
        public string ImagePath { get; set; }
        public int? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }
        public string TypeName { get; set; }
        public string CurrencyName { get; set; }
        public string CityName { get; set; }
        public int? CategoryId { get; set; }
        public int? GeneraId { get; set; }
        public int? TypeId { get; set; }

        public virtual ICollection<AnimalPhoto> Images { get; set; }

    }
}
