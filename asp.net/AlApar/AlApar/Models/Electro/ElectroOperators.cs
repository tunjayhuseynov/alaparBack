using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroOperators
    {
        public ElectroOperators()
        {
            Ads = new HashSet<ElectroAds>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }
        public virtual ICollection<ElectroAds> Ads { get; set; }
        public virtual ElectroCategories Category { get; set; }
    }
}
