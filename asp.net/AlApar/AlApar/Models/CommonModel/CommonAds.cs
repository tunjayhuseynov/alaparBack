using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.CommonModel
{
    public class CommonAds
    {
        [Column("discount")]
        public int? Discount { get; set; }
        
        public long Id { get; set; }
        public string PrivateId { get; set; }
        public int? Viewed { get; set; }
        public long? LogId { get; set; }
        public int? StatusId { get; set; }
        public int? PackageId { get; set; }
        public int? ContactId { get; set; }



        [Column("userId")]
        public long? UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual Users User { get; set; }
    }
}
