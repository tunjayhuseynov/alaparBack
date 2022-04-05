using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlApar.Repositories.Status;

namespace AlApar.Classes.Home
{
    public class Form : commonForm
    {
        [JsonProperty("category")]
        public int? CategoryId { get; set; }

        [JsonProperty("type")]
        public int? TypeId { get; set; }

        [JsonProperty("isNew")]
        public bool? IsNew { get; set; }

        [JsonProperty("hasDelivery")]
        public bool? HasDelivery { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("city")]
        public int? CityId { get; set; }

        [JsonProperty("price")]
        public double? Price { get; set; }

        [JsonProperty("currency")]
        [Bypass]
        public int? CurrencyId { get; set; }

        [JsonProperty("aboutInfo")]
        public string About { get; set; }

        [JsonProperty("phone")]
        public string ContactNumber { get; set; }

        [JsonProperty("isCall")]
        public bool? IsCall { get; set; }

        [JsonProperty("isWp")]
        public bool? IsWp { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }



        [JsonProperty("minPrice")]
        [FilterCheck(Repositories.Status.Type.Min, "Price")]
        [CurrencyConverter("CurrencyId", "CurrencyId")]
        public int? MinPrice { get; set; }

        [JsonProperty("maxPrice")]
        [FilterCheck(Repositories.Status.Type.Max, "Price")]
        [CurrencyConverter("CurrencyId", "CurrencyId")]
        public int? MaxPrice { get; set; }

        [JsonProperty("typeList")]
        [FilterCheck(Repositories.Status.Type.Multiple, "TypeId")]
        public List<int> TypeList { get; set; }
    }
}
