using AlApar.Models.CommonModel;
using AlApar.Models.Electro.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroPhotos : CommonImages
    {
        public virtual ElectroAds Ad { get; set; }
        public virtual ViewElectroAds ViewAd { get; set; }
      
    }
}
