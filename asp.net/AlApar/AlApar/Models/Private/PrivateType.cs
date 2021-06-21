using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivateType
    {
        public PrivateType()
        {
            PrivateAds = new HashSet<PrivateAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }

        public virtual PrivateCategory Category { get; set; }
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
    }
}
