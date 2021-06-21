using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Hobby
{
    public partial class HobbyType
    {
        public HobbyType()
        {
            HobbyAds = new HashSet<HobbyAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }

        public virtual HobbyCategory Category { get; set; }
        public virtual ICollection<HobbyAd> HobbyAds { get; set; }
    }
}
