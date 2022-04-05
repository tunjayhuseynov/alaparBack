using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    [Table("auto_types")]
    public class AutoTypes : TCategory
    {
        public AutoTypes()
        {
            Marks = new HashSet<AutoMarks>();
            Ads = new HashSet<AutoAds>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        [Column("banType")]
        public bool? BanType { get; set; }
        public bool? Mileage { get; set; }
        public bool? Fuel { get; set; }
        public bool? TransmissionBox { get; set; }
        public bool? Transmitter { get; set; }
        public bool? Power { get; set; }
        public bool? Capacity { get; set; }
        public bool? Checkboxes { get; set; }
        public bool? Title { get; set; }

        [Column("label")]
        public string Label { get; set; }

        [InverseProperty("Type")]
        public virtual ICollection<AutoMarks> Marks { get; set; }

        [InverseProperty("Types")]
        public virtual ICollection<AutoAds> Ads { get; set; }
    }
}
