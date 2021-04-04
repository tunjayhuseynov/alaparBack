using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    public class AutoContacts
    {
        public AutoContacts()
        {
            AutoAds = new HashSet<AutoAds>();
        }
        public int Id { get; set; }
        public int? CityId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool? IsWp { get; set; }
        public bool? isCall { get; set; }
        public DateTime? Timespan { get; set; } = DateTime.UtcNow;

        public virtual ICollection<AutoAds> AutoAds { get; set; }
        public virtual Cities City { get; set; }


    }
}
