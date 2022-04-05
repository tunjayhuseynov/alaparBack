using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auth
{

    [Table("business_accounts")]
    public class BusinessAccounts
    {
        [Key]
        public long Id { get; set; }
        
        [Column("name", TypeName = "nvarchar")]
        public string Name { get; set; }
        public string Phone1 { get; set; }

        [Column("address", TypeName = "nvarchar")]
        public string Address { get; set; }
        public string Lat { get; set; }
        public string Lon { get; set; }

        [Column("description", TypeName = "nvarchar")]
        public string Description { get; set; }
        public long BusinessTypeId { get; set; }
        public string Phone2 { get; set; }
        public string Phone3 { get; set; }
        public string Logo { get; set; }
        public DateTime? TillDate { get; set; }
        public bool? Active { get; set; }

        public string WeekdayStart { get; set; }
        public string WeekdayEnd { get; set; }
        public string SaturdayStart { get; set; }
        public string SaturdayEnd { get; set; }
        public string SundayStart { get; set; }
        public string SundayEnd { get; set; }

        [ForeignKey("BusinessTypeId")]
        public virtual BusinessTypes BusinessType { get; set; }

        [InverseProperty("BusinessAccount")]
        public virtual Users User { get; set; }
    }
}
