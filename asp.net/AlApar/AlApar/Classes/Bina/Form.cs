using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Classes.Bina
{
    public class Form
    {
        [JsonProperty("images")]
        public List<string> images { get; set; }

        [JsonProperty("category")]
        public int? CategoryId { get; set; }
    
        [JsonProperty("city")]
        public int? CityId { get; set; }

        [JsonProperty("region")]
        public int? RegionId { get; set; }

        [JsonProperty("village")]
        public int? VillageId { get; set; }

        [JsonProperty("metro")]
        public int? MetroId { get; set; }

        [JsonProperty("sellType")]
        public int? SellTypeId { get; set; }

        [JsonProperty("licence")]
        public bool? HasLicense { get; set; }

        [JsonProperty("ipoteka")]
        public bool? HasMortgage { get; set; }

        [JsonProperty("roomAmount")]
        public int? RoomAmount { get; set; }

        [JsonProperty("floor")]
        public int? Floor { get; set; }

        [JsonProperty("buildingFloor")]
        public int? BuildingFloor { get; set; }

        [JsonProperty("landAppointment")]
        public int? LandAppointmentId { get; set; }

        [JsonProperty("icareCixaris")]
        public bool? HasIcare { get; set; }

        [JsonProperty("belediyye")]
        public bool? HasBelediyye { get; set; }

        [JsonProperty("rentDuration")]
        public int? RentPaymentTypeId { get; set; }

        [JsonProperty("price")]
        public double? Price { get; set; }

        [JsonProperty("areaSize")]
        public double? AreaSize { get; set; }

        [JsonProperty("aboutInfo")]
        public string About { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("phone")]
        public string ContactNumber { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("wp")]
        public bool? IsWp { get; set; }

        [JsonProperty("call")]
        public bool? IsCall { get; set; }

        [JsonProperty("lat")]
        public double? Latitude { get; set; }

        [JsonProperty("lng")]
        public double? Longitude { get; set; }

        [JsonProperty("hamam")]
        public bool? Hamam { get; set; }

        [JsonProperty("eyvan")]
        public bool? Eyvan { get; set; }

        [JsonProperty("lift")]
        public bool? Lift { get; set; }

        [JsonProperty("mebel")]
        public bool? Mebel { get; set; }

        [JsonProperty("temir")]
        public bool? Temir { get; set; }

        [JsonProperty("hovuz")]
        public bool? Hovuz { get; set; }

        [JsonProperty("qaz")]
        public bool? Qaz { get; set; }

        [JsonProperty("su")]
        public bool? Su { get; set; }

        [JsonProperty("isig")]
        public bool? Isig { get; set; }

        [JsonProperty("kanalizasiya")]
        public bool? Kanalizasiya { get; set; }

        [JsonProperty("barter")]
        public bool? Barter { get; set; }

    }
}
