using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroLogs : CommonLogs
    {
        public ElectroLogs()
        {
            Ads = new HashSet<ElectroAds>();
        }

        public virtual ICollection<ElectroAds> Ads { get; set; }
    }
}
