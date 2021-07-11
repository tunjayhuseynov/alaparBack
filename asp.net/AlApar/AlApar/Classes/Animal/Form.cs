using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlApar.Repositories.Status;

namespace AlApar.Classes.Animal
{
    public class Form
    {
        [JsonProperty("category")]
        public int? CategoryId { get; set; }

        [JsonProperty("type")]
        public int? TypeId { get; set; }

        [JsonProperty("genera")]
        public int? GeneraId { get; set; }

        [JsonProperty("city")]
        public int? CityId { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("price")]
        public double? Price { get; set; }

        [JsonProperty("currency")]
        [Bypass]
        public int? CurrencyId { get; set; }

        [JsonProperty("aboutInfo")]
        public string About { get; set; }

        [JsonProperty("hasDelivery")]
        public bool? HasDelivery { get; set; }


        //Contact
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

        //Filter
                                                
        [JsonProperty("maxPrice")]
        [FilterCheck(TypeEnum.Max, "Price")]
        public int? MaxPrice { get; set; }  

        [JsonProperty("minPrice")]
        [FilterCheck(TypeEnum.Min, "Price")]
        public int? MinPrice { get; set; }
        
        [JsonProperty("sharedDate")]
        public int? SharedDate { get; set; }
    }
}
