using AlApar.Models.Home.View;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Home
{
    public partial class HomePhoto
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public long? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }

        public virtual HomeAd Ad { get; set; }
        public virtual ViewHomeAd ViewHomeAd { get; set; }
    }
}
