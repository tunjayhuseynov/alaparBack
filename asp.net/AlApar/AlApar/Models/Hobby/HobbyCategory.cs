using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Hobby
{
    public partial class HobbyCategory
    {
        public HobbyCategory()
        {
            HobbyAds = new HashSet<HobbyAd>();
            HobbyTypes = new HashSet<HobbyType>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? New { get; set; }
        public bool? Delivery { get; set; }

        public virtual ICollection<HobbyAd> HobbyAds { get; set; }
        public virtual ICollection<HobbyType> HobbyTypes { get; set; }
    }
}
