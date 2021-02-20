using Newtonsoft.Json;

namespace AlApar.Classes.Bina
{
    //Bina
    public class filterResponse
    {
        [JsonProperty(PropertyName = "category")]
        public int? CategoryId { get; set; }
        [JsonProperty(PropertyName = "city")]
        public int? CityId { get; set; }
        [JsonProperty(PropertyName = "region")]
        public int? RegionId { get; set; }
        [JsonProperty(PropertyName = "village")]
        public int? VillageId { get; set; }
        [JsonProperty(PropertyName = "metro")]
        public int? MetroId { get; set; }
        [JsonProperty(PropertyName = "sellType")]
        public int? SellTypeId { get; set; }
        [JsonProperty(PropertyName = "licence")]
        public bool? HasLicense { get; set; }
        [JsonProperty(PropertyName = "ipoteka")]
        public bool? HasMortgage { get; set; }
        public int? minPrice { get; set; }
        public int? maxPrice { get; set; }
        public int? minArea { get; set; }
        public int? maxArea { get; set; }
        public int? minRoomAmount { get; set; }
        public int? maxRoomAmount { get; set; }
        public int? minApartmantFloor { get; set; }
        public int? maxApartmantFloor { get; set; }
        public int? minFloorAmount { get; set; }
        public int? maxFloorAmount { get; set; }
    }
}
