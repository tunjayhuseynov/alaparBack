using AlApar.Models.Bina.Views;
using System;
using System.Collections.Generic;

namespace AlApar.Models.Bina
{
    public partial class BinaPersonalPhotos
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public long? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }
        public virtual BinaAdsPersonal Ad { get; set; }
        public virtual ViewBinaPersonalGeneral ViewAd { get; set; }
    }
}
