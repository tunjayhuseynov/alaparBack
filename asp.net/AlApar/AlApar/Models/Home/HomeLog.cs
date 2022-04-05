using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Home
{
    public partial class HomeLog : CommonLogs
    {
        public HomeLog()
        {
            HomeAds = new HashSet<HomeAd>();
        }


        public virtual ICollection<HomeAd> HomeAds { get; set; }
    }
}
