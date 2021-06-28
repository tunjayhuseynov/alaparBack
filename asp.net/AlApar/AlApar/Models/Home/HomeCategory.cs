using AlApar.Classes;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Home
{
    public partial class HomeCategory : TCategory
    {
        public HomeCategory()
        {
            HomeAds = new HashSet<HomeAd>();
            HomeTypes = new HashSet<HomeType>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? New { get; set; }
        public bool? Type { get; set; }

        public virtual ICollection<HomeAd> HomeAds { get; set; }
        public virtual ICollection<HomeType> HomeTypes { get; set; }
    }
}
