using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Service
{
    [Table("service_story")]
    public class ServiceStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual ServiceAd Ad { get; set; }
    }
}
