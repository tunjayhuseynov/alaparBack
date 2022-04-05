using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Service
{
    public partial class ServiceLog : CommonLogs
    {
        public ServiceLog()
        {
            ServiceAds = new HashSet<ServiceAd>();
        }


        public virtual ICollection<ServiceAd> ServiceAds { get; set; }
    }
}
