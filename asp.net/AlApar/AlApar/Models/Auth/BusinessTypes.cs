using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auth
{
    [Table("business_types")]
    public class BusinessTypes
    {
        public BusinessTypes() {
            BusinessAccounts = new HashSet<BusinessAccounts>();
        }

        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
        public bool Animal { get; set; }
        public bool Auto { get; set; }
        public bool Bina { get; set; }
        public bool Child { get; set; }
        public bool Electro { get; set; }
        public bool Hobby { get; set; }
        public bool Home { get; set; }
        public bool Job { get; set; }
        public bool Private { get; set; }
        public bool Service { get; set; }

        public virtual ICollection<BusinessAccounts> BusinessAccounts { get; set; }
    }
}
