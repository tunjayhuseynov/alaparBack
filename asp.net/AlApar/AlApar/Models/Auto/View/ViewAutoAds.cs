using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto.View
{
    public class ViewAutoAds : TView<AutoPhotos>
    {
        public ViewAutoAds()
        {
            Images = new HashSet<AutoPhotos>();
        }

        public long Id { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public int? Viewed { get; set; }
        public string Title { get; set; }
        public int? StatusId { get; set; } // +
        public int? PackageId { get; set; } // +
        public int? CategoryId { get; set; } // +
        public string Mark { get; set; }
        public int? ModelId { get; set; } // +
        public string Model { get; set; }
        public string ModelTitle { get; set; }
        public int? BanTypeId { get; set; } // +
        public string BanType { get; set; }
        public int? CurrencyId { get; set; } // +
        public int? ColorId { get; set; } // +
        public string Color { get; set; }
        public int? FuelId { get; set; } // +
        public string Fuel { get; set; }
        public int? TransmitterId { get; set; } // +
        public string Transmitter { get; set; }
        public int? TransmissionBoxId { get; set; } // +
        public string TransmissionBox { get; set; }
        public int? CarYear { get; set; }
        public double? Mileage { get; set; }
        public double? Price { get; set; }
        public double? MotorPower { get; set; }
        public double? MotorCapacity { get; set; }
        public string About { get; set; }
        public bool? Kredit { get; set; }
        public bool? Barter { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool? IsWp { get; set; }
        public bool? IsCall { get; set; }

        public string City { get; set; }
        public int? CityId { get; set; }

        public int? LogId { get; set; }

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

        [Column("sellTypeName")]
        public string SellTypeName { get; set; }
        
        [Column("rentPaymentName")]
        public string RentPaymentName { get; set; }
        
        [Column("sellTypeFilterName")]
        public string SellTypeFilterName { get; set; }

        [Column("packageName")]
        public string PackageName { get; set; }

        [Column("statusName")]
        public string StatusName { get; set; }

        public virtual ICollection<AutoPhotos> Images { get; set; }
    }
}
