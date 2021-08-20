using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlApar.Repositories.Status;

namespace AlApar.Classes.Child
{
    public class Form : commonForm
    {
        [JsonProperty("category")]
        public int? CategoryId { get; set; }

        [JsonProperty("clothesGender")]
        public int? ClothesGenderId { get; set; }

        [JsonProperty("clothesTypes")]
        public int? ClothesTypeId { get; set; }

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

        [JsonProperty("clothesSize")]
        public int? ClothesSizeId { get; set; }

        [JsonProperty("shoesSize")]
        public int? ShoesSizeId { get; set; }

        [JsonProperty("clothesColor")]
        public int? ColorId { get; set; }

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
        [FilterCheck(TypeEnum.Min, "Price")]
        [CurrencyConverter("CurrencyId", "CurrencyId")]
        public int? MinPrice { get; set; }

        [JsonProperty("maxPrice")]
        [FilterCheck(TypeEnum.Max, "Price")]
        [CurrencyConverter("CurrencyId", "CurrencyId")]
        public int? MaxPrice { get; set; }

        [JsonProperty("sharedDate")]
        public int? SharedDate { get; set; }

        [JsonProperty("typeList")]
        [FilterCheck(TypeEnum.Multiple, "TypeId")]
        public List<int> TypeList { get; set; }


        [JsonProperty("clothesSizeList")]
        [FilterCheck(TypeEnum.Multiple, "ClothesSizeId")]
        public List<int> ClothesSizeList { get; set; }


        [JsonProperty("clothesTypesList")]
        [FilterCheck(TypeEnum.Multiple, "ClothesTypeId")]
        public List<int> ClothesTypesList { get; set; }


        [JsonProperty("clothesColorList")]
        [FilterCheck(TypeEnum.Multiple, "ColorId")]
        public List<int> ClothesColorList { get; set; }


        [JsonProperty("shoesSizeList")]
        [FilterCheck(TypeEnum.Multiple, "ShoesSizeId")]
        public List<int> ShoesSizeList { get; set; }
    }
}
