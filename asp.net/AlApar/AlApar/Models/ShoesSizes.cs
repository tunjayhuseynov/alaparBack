using AlApar.Models.Child;
using AlApar.Models.Private;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models
{
    [Table("shoes_sizes")]
    public class ShoesSizes
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public char? TableName { get; set; }

        [InverseProperty("ShoesSize")]
        public ICollection<ChildAd> ChildAds { get; set; }

        [InverseProperty("ShoesSize")]
        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
    }
}
