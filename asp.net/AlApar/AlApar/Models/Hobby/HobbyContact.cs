using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Hobby
{
    public partial class HobbyContact
    {
        public HobbyContact()
        {
            Ads = new HashSet<HobbyAd>();
        }
        public int Id { get; set; }
        public string ContactNumber { get; set; }
        public bool? IsCall { get; set; }
        public bool? IsWp { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public DateTime? Timespan { get; set; }

        public virtual ICollection<HobbyAd> Ads { get; set; }
    }
}
