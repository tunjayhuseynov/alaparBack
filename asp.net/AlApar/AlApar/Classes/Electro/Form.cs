using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlApar.Repositories.Status;

namespace AlApar.Classes.Electro
{
    public class Form
    {
        [JsonProperty("category")]
        public int? CateogryId { get; set; }

        [JsonProperty("type")]
        public int? TypeId { get; set; }
        
        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("isNew")]
        public bool? IsNew { get; set; }

        [JsonProperty("hasDelivery")]
        public bool? HasDevlivery { get; set; }

        [JsonProperty("price")]
        public double? Price { get; set; }

        [JsonProperty("currency")]
        public int? CurrencyId { get; set; }

        [JsonProperty("about")]
        public string About { get; set; }

        [JsonProperty("operator")]
        public int? OperatorId { get; set; }

        [JsonProperty("inputPhoneNumber")]
        public string OperatorPhoneNumber { get; set; }

        [JsonProperty("mark")]
        public int? PhoneMarkId { get; set; }

        [JsonProperty("model")]
        public int? PhoneModelId { get; set; }

        [JsonProperty("computerMark")]
        public int? ComputerMarkId { get; set; }

        [JsonProperty("color")]
        public int? ColorId { get; set; }

        [JsonProperty("storage")]
        public int? StorageId { get; set; }

        [JsonProperty("City")]
        public int? CityId { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("phone")]
        public string PhoneNumber { get; set; }

        [JsonProperty("isWp")]
        public bool? IsWp { get; set; }

        [JsonProperty("isCall")]
        public bool? IsCall { get; set; }

        //Filter

        [JsonProperty("minPrice")]
        [FilterCheck(TypeEnum.Min, "Price")]
        public int? MinPrice { get; set; }

        [JsonProperty("maxPrice")]
        [FilterCheck(TypeEnum.Max, "Price")]
        public int? MaxPrice { get; set; }

        [JsonProperty("sharedDate")]
        public int? SharedDate { get; set; }
    }
}
