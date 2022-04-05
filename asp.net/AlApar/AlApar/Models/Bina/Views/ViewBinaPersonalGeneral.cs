using AlApar.Classes;
using AlApar.Models.View;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Bina.Views
{
    public class ViewBinaPersonalGeneral : CommonViewProperities, TView<BinaPhotos>
    {
        public long Id { get; set; }
        public int? Viewed { get; set; }
        public int? StatusId { get; set; } //Manual
        public int? CategoryId { get; set; }
        public int? CityId { get; set; }
        public int? ContactId { get; set; }
        public int? RegionId { get; set; }
        public int? VillageId { get; set; }
        public int? MetroId { get; set; }
        public int? SellTypeId { get; set; }
        public int? RentPaymentTypeId { get; set; }
        public int? CurrencyId { get; set; }
        public int? MetroWayId { get; set; }
        public int? BinaSellingTypeId { get; set; }
        public int? ContractTypeId { get; set; }
        public int? LandAppointmentId { get; set; }
        public int? TargetPointId { get; set; }
        public string Adress { get; set; } //Manual
        public string CustomAdress { get; set; }
        public string Email { get; set; }
        public string PersonName { get; set; }
        public string About { get; set; }
        public bool? NearHospital { get; set; }
        public bool? NearSchool { get; set; }
        public bool? NearShop { get; set; }
        public bool? NearKindigarden { get; set; }
        public bool? NearMall { get; set; }
        public bool? NearBusstop { get; set; }
        public int? RepairId { get; set; }
        public string RepairName { get; set; }
        public int? HouseFloor { get; set; }

        [Column("withstuffs")]
        public bool? Withstuffs { get; set; }

        [Column("madeinHouse")]
        public bool? MadeinHouse { get; set; }

        [Column("centralHeatingSystem")]
        public bool? CentralHeatingSystem { get; set; }

        [Column("parkingArea")]
        public bool? ParkingArea { get; set; }

        [Column("cableTv")]
        public bool? CabelTv { get; set; }

        [Column("pvcWindow")]
        public bool? PvcWindow { get; set; }

        [Column("combi")]
        public bool? Combi { get; set; }

        [Column("garaj")]
        public bool? Garaj { get; set; }

        //Relations
        public string LandAppointmentName { get; set; }
        public string TargetName { get; set; }
        public string PropertySellingName { get; set; }
        public string ContractName { get; set; }
        public string CategoryName { get; set; }
        public string PackageName { get; set; }
        public string CityName { get; set; }
        public string RegionName { get; set; }
        public string VillageName { get; set; }
        public string MetroName { get; set; }
        public string SellTypeName { get; set; }
        public string CurrencyName { get; set; }
        public string StatusName { get; set; }
        public string MetroWayName { get; set; }
        public string ContactNumber { get; set; }
        public string AreaUnit { get; set; }
        //--
        public double? Price { get; set; }
        public double? AreaSize { get; set; }
        public int? MetroDuration { get; set; }
        public int? SecondAreaSize { get; set; }
        public int? RoomAmount { get; set; }
        public int? BuildingFloor { get; set; }
        public int? Floor { get; set; }
        public int? Hamam { get; set; }
        public bool? Eyvan { get; set; }
        public bool? Lift { get; set; }
        public bool? Mebel { get; set; }
        public bool? Hovuz { get; set; }
        public bool? Qaz { get; set; }
        public bool? Su { get; set; }
        public bool? Isig { get; set; }
        public bool? Kanalizasiya { get; set; }
        public bool? MetbexM { get; set; }
        public bool? QabY { get; set; }
        public bool? PaltarY { get; set; }
        public bool? Soyuducu { get; set; }
        public bool? Tv { get; set; }
        public bool? Kondicioner { get; set; }
        public bool? Internet { get; set; }
        public bool? Telefon { get; set; }
        public bool? Usag { get; set; }
        public bool? Heyvan { get; set; }
        public bool? Otagordaire { get; set; }
        public bool? IsCall { get; set; }
        public bool? IsWp { get; set; }
        public bool? Owner { get; set; }
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }
        
        public virtual ICollection<BinaPhotos> Images { get; set; }
    }
}
