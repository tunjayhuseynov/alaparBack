using System;
using System.Collections.Generic;
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
        public DateTime? CreatedDate { get; set; } //Manual
        public DateTime? ModifiedDate { get; set; } //Manual
        public DateTime? FromDate { get; set; } //Manual
        public DateTime? TillDate { get; set; } //Manual

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }

    }
}
