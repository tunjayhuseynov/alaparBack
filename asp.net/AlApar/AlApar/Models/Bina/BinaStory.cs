using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Bina
{
    [Table("bina_story")]
    public class BinaStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual BinaAds Ad { get; set; }
    }
}
