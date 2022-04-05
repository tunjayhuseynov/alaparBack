using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auth
{
    [Table("Business_Prices")]
    public class BusinessPrices
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Months { get; set; }
    }
}
