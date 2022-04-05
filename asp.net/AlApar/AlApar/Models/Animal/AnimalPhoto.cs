using AlApar.Models.Animal.View;
using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;

namespace AlApar.Models.Animal
{
    public partial class AnimalPhoto : CommonImages
    {

        public virtual AnimalAd Ad { get; set; }

        public virtual ViewAnimalAd ViewAnimalAd { get; set; }
    }
}
