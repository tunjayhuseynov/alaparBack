using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildCategory
    {
        public ChildCategory()
        {
            ChildAds = new HashSet<ChildAd>();
            ChildClothesGenders = new HashSet<ChildClothesGender>();
            ChildTypes = new HashSet<ChildType>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? New { get; set; }
        public bool? Delivery { get; set; }

        public virtual ICollection<ChildAd> ChildAds { get; set; }
        public virtual ICollection<ChildClothesGender> ChildClothesGenders { get; set; }
        public virtual ICollection<ChildType> ChildTypes { get; set; }
    }
}
