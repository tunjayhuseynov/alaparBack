using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlApar.Repositories.Status;

namespace AlApar.Classes.Auto
{
    public class Form
    {
        [JsonProperty("images")]
        public List<ImageStructure> ImageList { get; set; }

        [JsonProperty("mark")]
        public int? MarkId { get; set; }

        [JsonProperty("model")]
        public int? ModelId { get; set; }

        [JsonProperty("ban")]
        public int? BanTypeId { get; set; }

        [JsonProperty("currency")]
        public int? CurrencyId { get; set; }

        [JsonProperty("color")]
        public int? ColorId { get; set; }

        [JsonProperty("fuel")]
        public int? FuelId { get; set; }

        [JsonProperty("transmitter")]
        public int? TransmitterId { get; set; }

        [JsonProperty("transmissionBox")]
        public int? TransmissionBoxId { get; set; }

        [JsonProperty("year")]
        public int? CarYear { get; set; }

        
        [JsonProperty("rentDuration")]
        public int? RentPaymentTypeId { get; set; }

        [JsonProperty("sellType")]
        public int? SellTypeId { get; set; }

        [JsonProperty("mileage")]
        public double? Mileage { get; set; }

        [JsonProperty("price")]
        public double? Price { get; set; }

        [JsonProperty("power")]
        public double? MotorPower { get; set; }

        [JsonProperty("capacity")]
        public double? MotorCapacity { get; set; }

        [JsonProperty("aboutInfo")]
        public string About { get; set; }

        [JsonProperty("kredit")]
        public bool? Kredit { get; set; }

        [JsonProperty("barter")]
        public bool? Barter { get; set; }


        /*Contact*/
        [JsonProperty("city")]
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
        public bool? isCall { get; set; }
        /*END*/
                                                    

        [JsonProperty("abs")]
        public bool? Abs { get; set; }

        [JsonProperty("yungulLehimDisk")]
        public bool? YungulDisk { get; set; }

        [JsonProperty("lyuk")]
        public bool? Lyuk { get; set; }

        [JsonProperty("yagisSensor")]
        public bool? YagisSensor { get; set; }

        [JsonProperty("merkeziQapanma")]
        public bool? MerkeziQapanma { get; set; }

        [JsonProperty("parkRadar")]
        public bool? ParkRadar { get; set; }

        [JsonProperty("kondisioner")]
        public bool? Kondisioner { get; set; }

        [JsonProperty("oturacaqIsitme")]
        public bool? OturacaqIsitme { get; set; }

        [JsonProperty("deriSalon")]
        public bool? DeriSalon { get; set; }

        [JsonProperty("yanPerde")]
        public bool? YanPerde { get; set; }

        [JsonProperty("oturacaqVentilyasiya")]
        public bool? OturacaqVentilyasiya { get; set; }

        [JsonProperty("ksenonLampa")]
        public bool? KsenonLampa { get; set; }  

        [JsonProperty("arxaKamera")]
        public bool? ArxaKamera { get; set; }

        [JsonProperty("bortKomputer")]
        public bool? BortKomputer { get; set; }

        [JsonProperty("esp")]
        public bool? Esp { get; set; }

        [JsonProperty("kruizKontrol")]
        public bool? KruizKontrol { get; set; }

        [JsonProperty("startStopSistemi")]
        public bool? StartStopSistem { get; set; }

        //Filter
        [JsonProperty("minPrice")]
        [FilterCheck(TypeEnum.Min, "Price")]
        public int? MinPrice { get; set; }

        [JsonProperty("maxPrice")]
        [FilterCheck(TypeEnum.Max, "Price")]
        public int? MaxPrice { get; set; }

        [JsonProperty("minYear")]
        [FilterCheck(TypeEnum.Min, "CarYear")]
        public int? MinYear { get; set; }

        [JsonProperty("maxYear")]
        [FilterCheck(TypeEnum.Max, "CarYear")]
        public int? MaxYear { get; set; }

        [JsonProperty("minMotorPower")]
        [FilterCheck(TypeEnum.Min, "MotorPower")]
        public int? MinMotorPower { get; set; }

        [JsonProperty("maxMotorPower")]
        [FilterCheck(TypeEnum.Max, "MotorPower")]
        public int? MaxMotorPower { get; set; }

        [JsonProperty("sharedDate")]
        public int? SharedDate { get; set; }
    }
}
