using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildType
    {
        public ChildType()
        {
            ChildAds = new HashSet<ChildAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }

        public virtual ChildCategory Category { get; set; }
        public virtual ICollection<ChildAd> ChildAds { get; set; }
    }
}
