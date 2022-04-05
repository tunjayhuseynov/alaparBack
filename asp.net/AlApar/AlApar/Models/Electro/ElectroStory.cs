using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    [Table("electro_story")]
    public class ElectroStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual ElectroAds Ad { get; set; }
    }
}
