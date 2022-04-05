using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Animal
{
    [Table("animal_story")]
    public class AnimalStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual AnimalAd Ad { get; set; }
    }
}
