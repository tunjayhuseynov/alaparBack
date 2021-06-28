using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace AlApar.Classes
{
    public class CurrencyConverterAttribute : Attribute
    {
        public string CurrencyFormPropertName { get; set; }
        public string CurrencyRealPropertName { get; set; }
        public CurrencyConverterAttribute(string currencyFormPropertName, string currencyRealPropertName)
        {
            CurrencyFormPropertName = currencyFormPropertName;
            CurrencyRealPropertName = currencyRealPropertName;
        }
    }
}
