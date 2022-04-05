using AlApar.Models.Child;
using AlApar.Models.Private;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models
{
    [Table("clothes_sizes")]
    public class ClothesSizes
    {
        public ClothesSizes() {
            ChildAd = new HashSet<ChildAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public char TableName { get; set; }

        [InverseProperty("ClothesSize")]
        public ICollection<ChildAd> ChildAd { get; set; }

        [InverseProperty("ClothesSize")]
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
    }
}
