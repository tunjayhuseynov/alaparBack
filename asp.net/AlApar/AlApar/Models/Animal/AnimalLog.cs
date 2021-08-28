using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models.Animal
{
    public partial class AnimalLog
    {
        public AnimalLog()
        {
            AnimalAds = new HashSet<AnimalAd>();
        }

        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;
        public DateTime? FromDate { get; set; } = DateTime.UtcNow;
        public DateTime? TillDate { get; set; } = DateTime.UtcNow.AddMonths(1);

        [Column("userIpAdresses")]
        public string UserIpAdresses { get; set; } = "{ipAdresses: []}";
        public virtual ICollection<AnimalAd> AnimalAds { get; set; }
    }
}
