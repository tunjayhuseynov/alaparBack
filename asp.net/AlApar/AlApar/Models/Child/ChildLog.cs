using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildLog : CommonLogs
    {
        public ChildLog()
        {
            ChildAds = new HashSet<ChildAd>();
        }


        public virtual ICollection<ChildAd> ChildAds { get; set; }
    }
}
