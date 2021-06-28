using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroAds : TCategory
    {
        public ElectroAds()
        {
            Photos = new HashSet<ElectroPhotos>();
        }
        public int Id { get; set; }
        public string PrivateId { get; set; }
        public int? LogId { get; set; }
        public int? StatusId { get; set; }
        public int? PackageId { get; set; }
        public int? Viewed { get; set; }
        public int? CateogryId { get; set; }
        public int? TypeId { get; set; }
        public string Title { get; set; }
        public bool? IsNew { get; set; }
        public bool? HasDelivery { get; set; }
        public double? Price { get; set; }
        public int? CurrencyId { get; set; }
        public int? ContactId { get; set; }
        public string About { get; set; }
        public int? OperatorId { get; set; }
        public string OperatorPhoneNumber { get; set; }
        public int? PhoneMarkId { get; set; }
        public int? PhoneModelId { get; set; }
        public int? ComputerMarkId { get; set; }
        public int? ColorId { get; set; }
        public int? StorageId { get; set; }

        public virtual ElectroLogs Log { get; set; }
        public virtual AdStatuses Status { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual ElectroCategories Category { get; set; }
        public virtual ElectroTypes Type { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual ElectroContacts Contact { get; set; }
        public virtual ElectroOperators Operator { get; set; }
        public virtual ElectroPhoneMarks PhoneMarks { get; set; }
        public virtual ElectroPhoneModels PhoneModels { get; set; }
        public virtual ElectroComputerMarks ComputerMarks { get; set; }
        public virtual ElectroPhoneColors Color { get; set; }
        public virtual ElectroPhoneStorages Storage { get; set; }
        public virtual ICollection<ElectroPhotos> Photos { get; set; }
    }
}
