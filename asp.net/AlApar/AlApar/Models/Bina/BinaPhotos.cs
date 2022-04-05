using AlApar.Models.Bina.Views;
using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;

namespace AlApar.Models.Bina
{
    public partial class BinaPhotos : CommonImages
    {
        public virtual BinaAds Ad { get; set; }
        public virtual ViewBinaPersonalGeneral ViewAd { get; set; }
    }
}
