using AlApar.Models.Animal;
using AlApar.Models.Auto;
using AlApar.Models.Bina;
using AlApar.Models.Child;
using AlApar.Models.Electro;
using AlApar.Models.Hobby;
using AlApar.Models.Home;
using AlApar.Models.Job;
using AlApar.Models.Private;
using AlApar.Models.Service;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models
{
    public partial class Cities
    {
        public Cities()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
            AutoAds = new HashSet<AutoAds>();
            ElectroAds = new HashSet<ElectroAds>();
            JobAds = new HashSet<JobAd>();
            HobbyAds = new HashSet<HobbyAd>();
            AnimalAds = new HashSet<AnimalAd>();
            HomeAds = new HashSet<HomeAd>();
            PrivateAds = new HashSet<PrivateAd>();
            ServiceAds = new HashSet<ServiceAd>();
            ChildAds = new HashSet<ChildAd>();
            TargetPoints = new HashSet<BinaTargetPoints>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        //Bina
        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual ICollection<Regions> Regions { get; set; }
        public virtual ICollection<Metros> Metros { get; set; }
        public virtual ICollection<BinaTargetPoints> TargetPoints { get; set; }

        //Auto
        [InverseProperty("City")]
        public virtual ICollection<AutoAds> AutoAds { get; set; }

        // Electro
        [InverseProperty("City")]
        public virtual ICollection<ElectroAds> ElectroAds { get; set; }


        public virtual ICollection<JobAd> JobAds { get; set; }

        public virtual ICollection<HobbyAd> HobbyAds { get; set; }
        public virtual ICollection<AnimalAd> AnimalAds { get; set; }
        public virtual ICollection<HomeAd> HomeAds { get; set; }
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
        public virtual ICollection<ServiceAd> ServiceAds { get; set; }
        public virtual ICollection<ChildAd> ChildAds { get; set; }
    }
}
