using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildContact
    {
        public ChildContact()
        {
            ChildAds = new HashSet<ChildAd>();
        }

        public int Id { get; set; }
        public string ContactNumber { get; set; }
        public bool? IsCall { get; set; }
        public bool? IsWp { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public DateTime? Timespan { get; set; }

        public virtual ICollection<ChildAd> ChildAds { get; set; }
    }
}
