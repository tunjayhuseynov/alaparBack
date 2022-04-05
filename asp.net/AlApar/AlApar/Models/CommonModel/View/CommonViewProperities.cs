using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models.View
{
    public class CommonViewProperities
    {
        [Column("tillDate")]
        public DateTime? TillDate { get; set; }

        [Column("packageId")]
        public int? PackageId { get; set; }

        [Column("fromDate")]
        public DateTime? FromDate { get; set; }
        
        [Column("fromDate")]
        public DateTime? ModifiedDate { get; set; }

        [Column("discount")]
        public int? Discount { get; set; }

        [Column("logId")]
        public long? LogId { get; set; }


        [Column("userId")]
        public long? UserId { get; set; }

        [ForeignKey("UserId")]
        public Users User { get; set; }

        public virtual ICollection<AutoPhotos> Images { get; set; }
    }
}
