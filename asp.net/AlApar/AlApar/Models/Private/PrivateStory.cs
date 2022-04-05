using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Private
{
    [Table("private_story")]
    public class PrivateStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual PrivateAd Ad { get; set; }
    }
}
