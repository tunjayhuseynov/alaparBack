using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    [Table("auto_story")]
    public class AutoStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual AutoAds Ad { get; set; }
    }
}
