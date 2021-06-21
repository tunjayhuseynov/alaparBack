using AlApar.Models.Animal;
using AlApar.Models.Auto;
using AlApar.Models.Bina;
using AlApar.Models.Child;
using AlApar.Models.Electro;
using AlApar.Models.Hobby;
using AlApar.Models.Home;
using AlApar.Models.Private;
using AlApar.Models.Service;
using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class Currency
    {
        public Currency()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
            AutoAds = new HashSet<AutoAds>();
            ElectroAds = new HashSet<ElectroAds>();
            HobbyAd = new HashSet<HobbyAd>();
            AnimalAds = new HashSet<AnimalAd>();
            HomeAds = new HashSet<HomeAd>();
            PrivateAds = new HashSet<PrivateAd>();
            ServiceAds = new HashSet<ServiceAd>();
            ChildAds = new HashSet<ChildAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual ICollection<AutoAds> AutoAds { get; set; }
        public virtual ICollection<ElectroAds> ElectroAds { get; set; }
        public virtual ICollection<HobbyAd> HobbyAd { get; set; }
        public virtual ICollection<AnimalAd> AnimalAds { get; set; }
        public virtual ICollection<HomeAd> HomeAds { get; set; }
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
        public virtual ICollection<ServiceAd> ServiceAds { get; set; }
        public virtual ICollection<ChildAd> ChildAds { get; set; }
    }
}
