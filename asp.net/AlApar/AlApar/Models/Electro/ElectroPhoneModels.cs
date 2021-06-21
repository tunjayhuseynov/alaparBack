using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroPhoneModels
    {
        public ElectroPhoneModels()
        {
            Ads = new HashSet<ElectroAds>();
            Colors = new HashSet<ElectroPhoneColors>();
            Storages = new HashSet<ElectroPhoneStorages>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public int? MarkId { get; set; }

        public virtual ElectroPhoneMarks Mark { get; set; }
        public virtual ICollection<ElectroAds> Ads { get; set; }
        public virtual ICollection<ElectroPhoneColors> Colors { get; set; }
        public virtual ICollection<ElectroPhoneStorages> Storages { get; set; }
    }
}
