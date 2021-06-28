using AlApar.Classes;
using System;
using System.Collections.Generic;

namespace AlApar.Models.Animal
{
    public partial class AnimalCategory : TCategory
    {
        public AnimalCategory()
        {
            AnimalAds = new HashSet<AnimalAd>();
            AnimalGeneras = new HashSet<AnimalGenera>();
            AnimalTypes = new HashSet<AnimalType>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? Genera { get; set; }
        public bool? Type { get; set; }

        public virtual ICollection<AnimalAd> AnimalAds { get; set; }
        public virtual ICollection<AnimalGenera> AnimalGeneras { get; set; }
        public virtual ICollection<AnimalType> AnimalTypes { get; set; }
    }
}
