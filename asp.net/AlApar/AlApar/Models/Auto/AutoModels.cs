using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    public class AutoModels
    {
        public AutoModels()
        {
            AutoAds = new HashSet<AutoAds>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? MarkId { get; set; }
        public string Title { get; set; }

        public virtual AutoMarks Mark { get; set; }
        public virtual ICollection<AutoAds> AutoAds { get; set; }
    }
}
