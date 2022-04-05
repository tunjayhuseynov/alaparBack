using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Job
{
    [Table("job_story")]
    public class JobStory : CommonStory
    {
        [ForeignKey("AdId")]
        public virtual JobAd Ad { get; set; }
    }
}
