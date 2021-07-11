using AlApar.Models.Child.Views;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildPhoto
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public long? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }

        public virtual ChildAd Ad { get; set; }
        public virtual ViewChildAd ViewChildAd { get; set; }
    }
}
