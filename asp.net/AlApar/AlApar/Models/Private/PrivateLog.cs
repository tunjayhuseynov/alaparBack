using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivateLog : CommonLogs
    {
        public PrivateLog()
        {
            PrivateAds = new HashSet<PrivateAd>();
        }


        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
    }
}
