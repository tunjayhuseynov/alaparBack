using System;
using System.Collections.Generic;



namespace AlApar.Models.Animal
{
    public partial class AnimalGenera
    {
        public AnimalGenera()
        {
            AnimalAds = new HashSet<AnimalAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }

        public virtual AnimalCategory Category { get; set; }
        public virtual ICollection<AnimalAd> AnimalAds { get; set; }
    }
}
