using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models.Animal
{
    public partial class AnimalLog : CommonLogs
    {
        public AnimalLog()
        {
            AnimalAds = new HashSet<AnimalAd>();
        }

        public virtual ICollection<AnimalAd> AnimalAds { get; set; }
    }
}
