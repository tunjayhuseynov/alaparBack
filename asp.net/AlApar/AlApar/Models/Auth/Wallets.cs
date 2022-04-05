using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auth
{
    [Table("Wallets")]
    public class Wallets
    {
        public Wallets() {
            Transactions = new HashSet<Transactions>();
        }

        [Key]
        public long Id { get; set; }
        public string PublicId { get; set; }
        public string PrivateId { get; set; }
        public double Amount { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        [InverseProperty("Wallet")]
        public virtual Users User { get; set; }

        [InverseProperty("Wallet")]
        public virtual ICollection<Transactions> Transactions { get; set; }
    }
}
