using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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
        public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;
        public DateTime? FromDate { get; set; } = DateTime.UtcNow;
        public DateTime? TillDate { get; set; } = DateTime.UtcNow.AddMonths(1);

        [Column("userIpAdresses")]
        public string UserIpAdresses { get; set; } = "{ipAdresses: []}";
        public virtual ICollection<AutoAds> AutoAds { get; set; }
    }
}
