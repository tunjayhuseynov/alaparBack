using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Bina
{
    public class BinaAdsLogs : CommonLogs
    {
        public BinaAdsLogs()
        {
            BinaAdsPersonal = new HashSet<BinaAds>();
        }
        public virtual ICollection<BinaAds> BinaAdsPersonal { get; set; }

    }
}
