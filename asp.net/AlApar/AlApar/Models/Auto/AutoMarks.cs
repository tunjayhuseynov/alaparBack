using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    public class AutoMarks
    {
        public AutoMarks()
        {
            AutoAds = new HashSet<AutoAds>();
            AutoModels = new HashSet<AutoModels>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<AutoAds> AutoAds { get; set; }
        public virtual ICollection<AutoModels> AutoModels { get; set; }
    }
}
