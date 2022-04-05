using AlApar.Models.Auto.View;
using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    public class AutoPhotos : CommonImages
    {

        public virtual AutoAds AutoAd { get; set; }
        public virtual ViewAutoAds ViewAutoAd { get; set; }
    }
}
