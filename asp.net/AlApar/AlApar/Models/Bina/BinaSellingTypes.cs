using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Bina
{
    public class BinaSellingTypes
    {
        public BinaSellingTypes() {
            BinaAdsPersonals = new HashSet<BinaAds>();
        }
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BinaAds> BinaAdsPersonals { get; set; }
    }
}
