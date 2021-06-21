using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Home
{
    public partial class HomeContact
    {
        public HomeContact()
        {
            HomeAds = new HashSet<HomeAd>();
        }

        public int Id { get; set; }
        public string ContactNumber { get; set; }
        public bool? IsCall { get; set; }
        public bool? IsWp { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public DateTime? Timespan { get; set; }

        public virtual ICollection<HomeAd> HomeAds { get; set; }
    }
}
