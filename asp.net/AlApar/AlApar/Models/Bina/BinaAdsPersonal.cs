using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class BinaAdsPersonal
    {
        public BinaAdsPersonal()
        {
            BinaPersonalPhotos = new HashSet<BinaPersonalPhotos>();
            PersonalContacts = new HashSet<PersonalContacts>();
        }

        public int Id { get; set; }
        public string privateId { get; set; }  // Manual
        public int? InfoId { get; set; } // Manual
        public string Adress { get; set; } //Manual
        public int? Viewed { get; set; } //Manual
        public int? AdStatusId { get; set; } //Manual
        public int? AdPackageId { get; set; } //Manual
        public int? CategoryId { get; set; }
        public int? CityId { get; set; }
        public int? RegionId { get; set; }
        public int? VillageId { get; set; }
        public int? MetroId { get; set; }
        public int? SellTypeId { get; set; }
        public int? RentPaymentTypeId { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public double? AreaSize { get; set; }
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }
        public string About { get; set; }
        public int? PersonalContactId { get; set; } // Manual
        public bool? HasLicense { get; set; }
        public int? LandAppointmentId { get; set; }
        public bool? HasMortgage { get; set; }
        public int? RoomAmount { get; set; }
        public int? BuildingFloor { get; set; }
        public int? Floor { get; set; }
        public bool? HasIcare { get; set; }
        public bool? HasBelediyye { get; set; }
        public bool? Hamam { get; set; }
        public bool? Eyvan { get; set; }
        public bool? Lift { get; set; }
        public bool? Mebel { get; set; }
        public bool? Temir { get; set; }
        public bool? Hovuz { get; set; }
        public bool? Qaz { get; set; }
        public bool? Su { get; set; }
        public bool? Isig { get; set; }
        public bool? Kanalizasiya { get; set; }
        public bool? Barter { get; set; }

        public virtual BinaAdsPersonalInfos Infos { get; set; }
        public virtual AdPackages AdPackage { get; set; }
        public virtual AdStatuses AdStatus { get; set; }
        public virtual BinaCategories Category { get; set; }
        public virtual Cities City { get; set; }
        public virtual Regions Region { get; set; }
        public virtual Villages Village { get; set; }
        public virtual Curreny Currency { get; set; }
        public virtual BinaLandAppointments LandAppointment { get; set; }
        public virtual Metros Metro { get; set; }
        public virtual PersonalContacts PersonalContact { get; set; }
        public virtual BinaRentPaymentTypes RentPaymentType { get; set; }
        public virtual SellTypes SellType { get; set; }
        public virtual ICollection<BinaPersonalPhotos> BinaPersonalPhotos { get; set; }
        public virtual ICollection<PersonalContacts> PersonalContacts { get; set; }
    }
}
