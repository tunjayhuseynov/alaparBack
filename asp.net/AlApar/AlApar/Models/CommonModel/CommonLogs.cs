using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.CommonModel
{
    public class CommonLogs
    {
        public long Id { get; set; }
        public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;
        public DateTime? FromDate { get; set; } = DateTime.UtcNow;
        public DateTime? TillDate { get; set; } = DateTime.UtcNow.AddMonths(1);

        [Column("userIpAdresses")]
        public string UserIpAdresses { get; set; } = "{\"ipAdresses\": []}";
    }
}
