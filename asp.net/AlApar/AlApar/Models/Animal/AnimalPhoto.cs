using AlApar.Models.Animal.View;
using System;
using System.Collections.Generic;

namespace AlApar.Models.Animal
{
    public partial class AnimalPhoto
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public long? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }
        public string Blur { get; set; }

        public virtual AnimalAd Ad { get; set; }

        public virtual ViewAnimalAd ViewAnimalAd { get; set; }
    }
}
