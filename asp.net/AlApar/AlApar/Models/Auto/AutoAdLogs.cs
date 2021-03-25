using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    public class AutoAdLogs
    {
        public AutoAdLogs()
        {
            AutoAds = new HashSet<AutoAds>();
        }
        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? TillDate { get; set; }

        public virtual ICollection<AutoAds> AutoAds { get; set; }
    }
}
