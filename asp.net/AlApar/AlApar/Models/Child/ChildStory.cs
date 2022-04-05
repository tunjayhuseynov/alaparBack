using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Child
{
    [Table("child_story")]
    public class ChildStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual ChildAd Ad { get; set; }
    }
}
