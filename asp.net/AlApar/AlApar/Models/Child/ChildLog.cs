using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildLog
    {
        public ChildLog()
        {
            ChildAds = new HashSet<ChildAd>();
        }

        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? TillDate { get; set; }

        public virtual ICollection<ChildAd> ChildAds { get; set; }
    }
}
