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

namespace AlApar.Models
{
    public partial class Cities
    {
        public Cities()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
            AutoContacts = new HashSet<AutoContacts>();
            ElectroContacts = new HashSet<ElectroContacts>();
            JobAds = new HashSet<JobAd>();
            HobbyAds = new HashSet<HobbyAd>();
            AnimalAds = new HashSet<AnimalAd>();
            HomeAds = new HashSet<HomeAd>();
            PrivateAds = new HashSet<PrivateAd>();
            ServiceAds = new HashSet<ServiceAd>();
            ChildAds = new HashSet<ChildAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        //Bina
        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual ICollection<Regions> Regions { get; set; }
        public virtual ICollection<Metros> Metros { get; set; }

        //Auto
        public virtual ICollection<AutoContacts> AutoContacts { get; set; }

        // Electro
        public virtual ICollection<ElectroContacts> ElectroContacts { get; set; }


        public virtual ICollection<JobAd> JobAds { get; set; }

        public virtual ICollection<HobbyAd> HobbyAds { get; set; }
        public virtual ICollection<AnimalAd> AnimalAds { get; set; }
        public virtual ICollection<HomeAd> HomeAds { get; set; }
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
        public virtual ICollection<ServiceAd> ServiceAds { get; set; }
        public virtual ICollection<ChildAd> ChildAds { get; set; }
    }
}
