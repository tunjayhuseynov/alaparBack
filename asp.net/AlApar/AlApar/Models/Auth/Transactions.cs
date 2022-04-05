using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auth
{
    public class Transactions
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int Amount { get; set; }
        public string Address { get; set; }
        public long WalletId { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ProcessStatus { get; set; }

        [ForeignKey("WalletId")]
        public virtual Wallets Wallet { get; set; }
    }
}
