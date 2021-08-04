using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroTypes
    {
        public ElectroTypes()
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
