using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Hobby
{
    public partial class HobbyLog
    {
        public HobbyLog()
        {
            HobbyAds = new HashSet<HobbyAd>();
        }

        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? TillDate { get; set; }

        public virtual ICollection<HobbyAd> HobbyAds { get; set; }
    }
}
