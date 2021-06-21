using System;
using System.Collections.Generic;



namespace AlApar.Models.Animal
{
    public partial class AnimalLog
    {
        public AnimalLog()
        {
            AnimalAds = new HashSet<AnimalAd>();
        }

        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? TillDate { get; set; }

        public virtual ICollection<AnimalAd> AnimalAds { get; set; }
    }
}
