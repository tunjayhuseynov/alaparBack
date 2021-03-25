using AlApar.Models.Auto;
using AlApar.Models.Bina;
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
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }

        public virtual ICollection<Regions> Regions { get; set; }
        public virtual ICollection<Metros> Metros { get; set; }

        //Auto
        public virtual ICollection<AutoContacts> AutoContacts { get; set; }
    }
}
