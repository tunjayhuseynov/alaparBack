using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro.Views
{
    public class ViewElectroAds : TView<ElectroPhotos>
    {
        public long Id { get; set; }
        public int? StatusId { get; set; }
        public int? PackageId { get; set; }
        public int? Viewed { get; set; }
        public int? CategoryId { get; set; }
        public int? ContactId { get; set; }

        public int? TypeId { get; set; }
        public string Title { get; set; }
        public bool? IsNew { get; set; }
        public bool? HasDelivery { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public string About { get; set; }
        public int? OperatorId { get; set; }
        public string OperatorPhoneNumber { get; set; }
        public int? PhoneMarkId { get; set; }
        public int? PhoneModelId { get; set; }
        public int? ComputerMarkId { get; set; }
        public int? ColorId { get; set; }
        public int? StorageId { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public string ComputerMark { get; set; }
        public string Operator { get; set; }
        public string Category { get; set; }
        public string PhoneModel { get; set; }
        public string PhoneColor { get; set; }
        public string PhoneMark { get; set; }
        public string PhoneStorage { get; set; }
        public string PhoneType { get; set; }
        public string Currency { get; set; }
        public string City { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool? IsWp { get; set; }
        public bool? IsCall { get; set; }
        public int? LogId { get; set; }

        public virtual ICollection<ElectroPhotos> Images { get; set; }
    }
}
