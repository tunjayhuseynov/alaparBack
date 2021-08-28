using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models.Bina
{
    public partial class BinaAdsPersonal
    {
        public BinaAdsPersonal()
        {
            Images = new HashSet<BinaPersonalPhotos>();

        }

        public long Id { get; set; }
        public string PrivateId { get; set; }  // Manual
        public int? LogId { get; set; } // Manual
        public string Adress { get; set; } //Manual
        public int? Viewed { get; set; } //Manual
        public int? StatusId { get; set; } //Manual
        public int? PackageId { get; set; } //Manual
        public int? CategoryId { get; set; }
        public int? CityId { get; set; }
        public int? RegionId { get; set; }
        public int? VillageId { get; set; }
        public int? RepairId { get; set; }
        public int? HouseFloor { get; set; }
        public int? MetroId { get; set; }
        public int? SellTypeId { get; set; }
        public int? RentPaymentTypeId { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public double? AreaSize { get; set; }
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }

        public string About { get; set; }
        public int? ContactId { get; set; } // Manual
        public int? LandAppointmentId { get; set; }
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
        public int? MetroDuration { get; set; }
        public int? MetroWayId { get; set; }
        public double? SecondAreaSize { get; set; }
        public string CustomAdress { get; set; }
        public int? TargetPointId { get; set; }
        public int? ContractTypeId { get; set; }
        public int? BinaSellingTypeId { get; set; }
        public bool? NearHospital { get; set; }
        public bool? NearSchool { get; set; }
        public bool? NearShop { get; set; }
        public bool? NearKindigarden { get; set; }
        public bool? NearMall { get; set; }
        public bool? NearBusstop { get; set; }

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
        public bool? PVCWindow { get; set; }

        [Column("combi")]
        public bool? Combi { get; set; }

        [Column("garaj")]
        public bool? Garaj { get; set; }


        public virtual BinaContractTypes ContractTypes { get; set; }
        public virtual BinaRepairs Repair { get; set; }
        public virtual BinaSellingTypes BinaSellingTypes { get; set; }
        public virtual BinaAdsPersonalLogs Infos { get; set; }
        public virtual BinaTargetPoints TargetPoint { get; set; }
        public virtual MetroWays MetroWay { get; set; }
        public virtual AdPackages AdPackage { get; set; }
        public virtual AdStatuses AdStatus { get; set; }
        public virtual BinaCategories Category { get; set; }
        public virtual Cities City { get; set; }
        public virtual Regions Region { get; set; }
        public virtual Villages Village { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual BinaLandAppointments LandAppointment { get; set; }
        public virtual Metros Metro { get; set; }
        public virtual BinaPersonalContacts PersonalContact { get; set; }
        public virtual BinaRentPaymentTypes RentPaymentType { get; set; }
        public virtual SellTypes SellType { get; set; }
        public virtual ICollection<BinaPersonalPhotos> Images { get; set; }
    }
}
