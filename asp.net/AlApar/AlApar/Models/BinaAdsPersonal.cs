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
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? TillDate { get; set; }
        public int? CategoryId { get; set; }
        public int? AdStatusId { get; set; }
        public int? AdPackageId { get; set; }
        public int? CityId { get; set; }
        public int? RegionId { get; set; }
        public int? VillageId { get; set; }
        public int? MetroId { get; set; }
        public int? SellTypeId { get; set; }
        public int? RentPaymentTypeId { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public double? AreaSize { get; set; }
        public string Adress { get; set; }
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }
        public string About { get; set; }
        public int? PersonalContactId { get; set; }
        public bool? HasLicense { get; set; }
        public int? LandAppointmentId { get; set; }
        public bool? HasMortgage { get; set; }
        public int? RoomAmount { get; set; }
        public int? FloorAmount { get; set; }
        public int? Floor { get; set; }
        public int? Viewed { get; set; }

        public virtual AdPackages AdPackage { get; set; }
        public virtual AdStatuses AdStatus { get; set; }
        public virtual BinaCategories Category { get; set; }
        public virtual Cities City { get; set; }
        public virtual Curreny Currency { get; set; }
        public virtual BinaLandAppointments LandAppointment { get; set; }
        public virtual Metros Metro { get; set; }
        public virtual PersonalContacts PersonalContact { get; set; }
        public virtual Regions Region { get; set; }
        public virtual BinaRentPaymentTypes RentPaymentType { get; set; }
        public virtual SellTypes SellType { get; set; }
        public virtual Villages Village { get; set; }
        public virtual ICollection<BinaPersonalPhotos> BinaPersonalPhotos { get; set; }
        public virtual ICollection<PersonalContacts> PersonalContacts { get; set; }
    }
}
