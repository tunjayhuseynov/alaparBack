using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Home
{
    public partial class HomeLog
    {
        public HomeLog()
        {
            HomeAds = new HashSet<HomeAd>();
        }

        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? TillDate { get; set; }

        public virtual ICollection<HomeAd> HomeAds { get; set; }
    }
}
