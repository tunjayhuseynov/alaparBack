using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    public class AutoPhotos
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public int? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }
        public virtual AutoAds AutoAd { get; set; }
    }
}
