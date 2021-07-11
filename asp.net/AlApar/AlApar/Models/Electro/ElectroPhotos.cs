using AlApar.Models.Electro.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroPhotos
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public long? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }
        
        public virtual ElectroAds Ad { get; set; }
        public virtual ViewElectroAds ViewAd { get; set; }
      
    }
}
