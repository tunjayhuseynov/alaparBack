using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Bina
{
    public class BinaAdsPersonalLogs
    {
        public BinaAdsPersonalLogs()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
        }
        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; } = DateTime.UtcNow; //Manual
        public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow; //Manual
        public DateTime? FromDate { get; set; } = DateTime.UtcNow; //Manual
        public DateTime? TillDate { get; set; } = DateTime.UtcNow.AddMonths(1);  //Manual

        [Column("userIpAdresses")]
        public string UserIpAdresses { get; set; } = "{ipAdresses: []}";
        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }

    }
}
