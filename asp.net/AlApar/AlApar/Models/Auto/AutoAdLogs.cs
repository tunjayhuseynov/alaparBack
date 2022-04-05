using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    public class AutoAdLogs : CommonLogs
    {
        public AutoAdLogs()
        {
            AutoAds = new HashSet<AutoAds>();
        }
        public virtual ICollection<AutoAds> AutoAds { get; set; }
    }
}
