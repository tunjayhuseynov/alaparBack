using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class BinaPersonalPhotos
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public int? AdId { get; set; }

        public virtual BinaAdsPersonal Ad { get; set; }
    }
}
