using AlApar.Models.Private.View;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivatePhoto
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public long? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }

        public virtual PrivateAd Ad { get; set; }
        public virtual ViewPrivateAd ViewPrivateAd { get; set; }
    }
}
