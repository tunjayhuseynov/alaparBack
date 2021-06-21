using System;
using System.Collections.Generic;

namespace AlApar.Models.Animal
{
    public partial class AnimalContact
    {
        public AnimalContact()
        {
            AnimalAds = new HashSet<AnimalAd>();
        }

        public int Id { get; set; }
        public string ContactNumber { get; set; }
        public bool? IsCall { get; set; }
        public bool? IsWp { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public DateTime? Timespan { get; set; }

        public virtual ICollection<AnimalAd> AnimalAds { get; set; }
    }
}
