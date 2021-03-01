using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class PersonalContacts
    {
        public PersonalContacts()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
        }

        public int Id { get; set; }
        public string ContactNumber { get; set; }
        public string Name { get; set; }
        public bool? IsCall { get; set; }
        public bool? IsWp { get; set; }
        public string Email { get; set; }
        public int? AdId { get; set; }
        public bool? Owner { get; set; }

        public virtual BinaAdsPersonal Ad { get; set; }
        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
    }
}
