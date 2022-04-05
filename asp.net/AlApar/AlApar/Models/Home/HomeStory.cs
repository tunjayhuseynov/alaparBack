using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Home
{
    [Table("home_story")]
    public class HomeStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual HomeAd Ad { get; set; }
    }
}
