using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivateLog
    {
        public PrivateLog()
        {
            PrivateAds = new HashSet<PrivateAd>();
        }

        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? TillDate { get; set; }

        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
    }
}
