using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroContacts
    {
        public ElectroContacts()
        {
            Ads = new HashSet<ElectroAds>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool? IsWp { get; set; }
        public bool? IsCall { get; set; }
        public DateTime? Timespan { get; set; } = DateTime.UtcNow;

        public virtual ICollection<ElectroAds> Ads { get; set; }
    }
}
