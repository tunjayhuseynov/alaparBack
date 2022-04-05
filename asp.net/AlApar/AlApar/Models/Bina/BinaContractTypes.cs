using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Bina
{
    public class BinaContractTypes
    {
        public BinaContractTypes() {
            BinaAdsPersonal = new HashSet<BinaAds>();
        }
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BinaAds> BinaAdsPersonal { get; set; }
    }
}
