using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Hobby
{
    public partial class HobbyLog : CommonLogs
    {
        public HobbyLog()
        {
            HobbyAds = new HashSet<HobbyAd>();
        }


        public virtual ICollection<HobbyAd> HobbyAds { get; set; }
    }
}
