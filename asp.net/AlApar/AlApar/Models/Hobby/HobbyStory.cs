using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Hobby
{
    [Table("hobby_story")]
    public class HobbyStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual HobbyAd Ad { get; set; }
    }
}
