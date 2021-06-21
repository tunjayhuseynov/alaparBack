using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Home
{
    public partial class HomeType
    {
        public HomeType()
        {
            HomeAds = new HashSet<HomeAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }

        public virtual HomeCategory Category { get; set; }
        public virtual ICollection<HomeAd> HomeAds { get; set; }
    }
}
