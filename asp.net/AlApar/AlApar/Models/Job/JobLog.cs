using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobLog : CommonLogs
    {
        public JobLog()
        {
            JobAds = new HashSet<JobAd>();
        }


        public virtual ICollection<JobAd> JobAds { get; set; }
    }
}
