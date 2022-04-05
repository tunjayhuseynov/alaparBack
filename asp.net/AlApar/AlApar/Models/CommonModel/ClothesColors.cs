using AlApar.Models.Child;
using AlApar.Models.Private;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models
{
    [Table("clothes_colors")]
    public class ClothesColors
    {
        public ClothesColors() {
            ChildAds = new HashSet<ChildAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        [InverseProperty("ClothesColor")]
        public virtual ICollection<ChildAd> ChildAds { get; set; }

        [InverseProperty("ClothesColor")]
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
    }
}
