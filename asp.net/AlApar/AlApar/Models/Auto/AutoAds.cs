using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    public class AutoAds
    {
        public AutoAds()
        {
            AutoPhotos = new HashSet<AutoPhotos>();
        }

        public long Id { get; set; }
        public string PrivateId { get; set; }
        public int? Viewed { get; set; }
        public string Title { get; set; }
        public int? LogId { get; set; } // +
        public int? StatusId { get; set; } // +
        public int? PackageId { get; set; } // +
        public int? CategoryId { get; set; } // +
        public int? ModelId { get; set; } // +
        public int? BanTypeId { get; set; } // +
        public int? CurrencyId { get; set; } // +
        public int? ColorId { get; set; } // +
        public int? FuelId { get; set; } // +
        public int? TransmitterId { get; set; } // +
        public int? TransmissionBoxId { get; set; } // +
        public int? ContactId { get; set; }
        public int? RentPaymentTypeId { get; set; }
        public int? SellTypeId { get; set; }
        public int? CarYear { get; set; }
        public double? Mileage { get; set; }
        public double? Price { get; set; }
        public double? MotorPower { get; set; }
        public double? MotorCapacity { get; set; }
        public string About { get; set; }
        public bool? Kredit { get; set; }
        public bool? Barter { get; set; }


        public bool? Abs { get; set; }
        public bool? YungulDisk { get; set; }
        public bool? Lyuk { get; set; }
        public bool? YagisSensor { get; set; }
        public bool? MerkeziQapanma { get; set; }
        public bool? ParkRadar { get; set; }
        public bool? Kondisioner { get; set; }
        public bool? OturacaqIsitme { get; set; }
        public bool? DeriSalon { get; set; }
        public bool? YanPerde { get; set; }
        public bool? OturacaqVentilyasiya { get; set; }
        public bool? KsenonLampa { get; set; }
        public bool? ArxaKamera { get; set; }
        public bool? BortKomputer { get; set; }
        public bool? Esp { get; set; }
        public bool? KruizKontrol { get; set; }
        public bool? StartStopSistem { get; set; }

        public virtual AutoAdLogs Log { get; set; }
        public virtual AutoRentPaymentTypes RentPaymentType { get; set; }
        public virtual SellTypes SellType { get; set; }
        public virtual AdStatuses Status { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AutoMarks Mark { get; set; }
        public virtual AutoModels Model { get; set; }
        public virtual AutoBanTypes BanType { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual AutoColors Color { get; set; }
        public virtual AutoFuels Fuel { get; set; }
        public virtual AutoTransmitters Transmitter { get; set; }
        public virtual AutoTransmissionBoxs TransmissionBox { get; set; }
        public virtual AutoContacts Contact { get; set; }
        public virtual ICollection<AutoPhotos> AutoPhotos { get; set; }
    }
}
