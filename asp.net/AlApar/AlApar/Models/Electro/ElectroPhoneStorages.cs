using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroPhoneStorages
    {
        public ElectroPhoneStorages()
        {
            Ads = new HashSet<ElectroAds>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ModelId { get; set; }

        public virtual ElectroPhoneModels Model { get; set; }
        public ICollection<ElectroAds> Ads { get; set; }
    }
}
