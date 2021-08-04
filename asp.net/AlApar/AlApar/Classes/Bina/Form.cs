using AlApar.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlApar.Repositories.Status;

namespace AlApar.Classes.Bina
{
    public class Form
    {
        [JsonProperty("images")]
        public List<ImageStructure> ImageList { get; set; }

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


        [JsonProperty("roomAmount")]
        public int? RoomAmount { get; set; }

        [JsonProperty("floor")]
        public int? Floor { get; set; }

        [JsonProperty("buildingFloor")]
        public int? BuildingFloor { get; set; }

        [JsonProperty("landAppointment")]
        public int? LandAppointmentId { get; set; }


        [JsonProperty("target")]
        public int? TargetPointId { get; set; }

        [JsonProperty("contract")]
        public int? ContractTypeId { get; set; }
        
        [JsonProperty("propertySelling")]
        public int? BinaSellingTypeId { get; set; }

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
        public int? Hamam { get; set; }

        [JsonProperty("eyvan")]
        public bool? Eyvan { get; set; }

        [JsonProperty("lift")]
        public bool? Lift { get; set; }

        [JsonProperty("mebel")]
        public bool? Mebel { get; set; }

        [JsonProperty("houseFloor")]
        public int? HouseFloor { get; set; }

        [JsonProperty("temir")]
        public int? RepairId { get; set; }

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


        [JsonProperty("owner")]
        public bool? Owner { get; set; }

        [JsonProperty("metbex")]
        public bool? MetbexM { get; set; }

        [JsonProperty("qab")]
        public bool? QabY { get; set; }

        [JsonProperty("paltar")]
        public bool? PaltarY { get; set; }

        [JsonProperty("soyuducu")]
        public bool? Soyuducu { get; set; }

        [JsonProperty("tv")]
        public bool? Tv { get; set; }

        [JsonProperty("kondicionser")]
        public bool? Kondicioner { get; set; }

        [JsonProperty("internet")]
        public bool? Internet { get; set; }

        [JsonProperty("telefon")]
        public bool? Telefon { get; set; }

        [JsonProperty("usag")]
        public bool? Usag { get; set; }

        [JsonProperty("heyvan")]
        public bool? Heyvan { get; set; }

        [JsonProperty("otagordaire")]
        public bool? Otagordaire { get; set; }

        [JsonProperty("currency")]
        [Bypass]
        public int? CurrencyId { get; set; }

        [JsonProperty("metroWay")]
        public int? MetroWayId { get; set; }

        [JsonProperty("metroDuration")]
        public int? MetroDuration { get; set; }

        [JsonProperty("secondAreaSize")]
        public int? SecondAreaSize { get; set; }

        [JsonProperty("customAdress")]
        public string CustomAdress { get; set; }

        [JsonProperty("nearHospital")]
        public bool? NearHospital { get; set; }

        [JsonProperty("nearSchool")]
        public bool? NearSchool { get; set; }

        [JsonProperty("nearShop")]
        public bool? NearShop { get; set; }

        [JsonProperty("nearKindigarden")]
        public bool? NearKindigarden { get; set; }

        [JsonProperty("nearMall")]
        public bool? NearMall { get; set; }

        [JsonProperty("nearBusstop")]
        public bool? NearBusstop { get; set; }


        //Filter Side
        //Filter Side
        //Filter Side

        [JsonProperty("minApartmentFloor")]
        [FilterCheck(TypeEnum.Min, "Floor")]
        public int? MinApartmentFloor { get; set; }

        [JsonProperty("maxApartmentFloor")]
        [FilterCheck(TypeEnum.Max, "Floor")]
        public int? MaxApartmentFloor { get; set; }

        [JsonProperty("minBuildingFloor")]
        [FilterCheck(TypeEnum.Min, "BuildingFloor")]
        public int? MinBuildingFloor { get; set; }

        [JsonProperty("maxBuildingFloor")]
        [FilterCheck(TypeEnum.Max, "BuildingFloor")]
        public int? MaxBuildingFloor { get; set; }

        [JsonProperty("minPrice")]
        [FilterCheck(TypeEnum.Min, "Price")]
        [CurrencyConverter("CurrencyId", "CurrencyId")]
        public int? MinPrice { get; set; }

        [JsonProperty("maxPrice")]
        [FilterCheck(TypeEnum.Max, "Price")]
        [CurrencyConverter("CurrencyId", "CurrencyId")]
        public int? MaxPrice { get; set; }

        [JsonProperty("minArea")]
        [FilterCheck(TypeEnum.Min, "AreaSize")]
        public int? MinArea { get; set; }

        [JsonProperty("maxArea")]
        [FilterCheck(TypeEnum.Max, "AreaSize")]
        public int? MaxArea { get; set; }

        [JsonProperty("minMetroDuration")]
        [FilterCheck(TypeEnum.Min, "MetroDuration")]
        public int? MinMetroDuration { get; set; } 

        [JsonProperty("maxMetroDuration")]
        [FilterCheck(TypeEnum.Max, "MetroDuration")]
        public int? MaxMetroDuration { get; set; } 

        [JsonProperty("minLandArea")]
        [FilterCheck(TypeEnum.Min, "SecondAreaSize")]
        public int? MinLandArea { get; set; } 

        [JsonProperty("maxLandArea")]
        [FilterCheck(TypeEnum.Max, "SecondAreaSize")]
        public int? MaxLandArea { get; set; }

        [JsonProperty("minRoom")]
        [FilterCheck(TypeEnum.Min, "roomAmount")]
        public int? MinRoom { get; set; }

        [JsonProperty("maxRoom")]
        [FilterCheck(TypeEnum.Max, "roomAmount")]
        public int? MaxRoom { get; set; }

        [JsonProperty("sharedDate")]
        public int? SharedDate { get; set; }

        [JsonProperty("bottomfloor")]
        public bool? Bottomfloor { get; set; } 

        [JsonProperty("middlefloor")]
        public bool? Middlefloor { get; set; } 

        [JsonProperty("upperfloor")]
        public bool? Upperfloor { get; set; } 



    }
}
