using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Service
{
    public partial class ServiceCategory : TCategory
    {
        public ServiceCategory()
        {
            ServiceAds = new HashSet<ServiceAd>();
            ServiceTypes = new HashSet<ServiceType>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? New { get; set; }
        public bool? Delivery { get; set; }

        [Column("lableName")]
        public string LabelName { get; set; }
        public virtual ICollection<ServiceAd> ServiceAds { get; set; }
        public virtual ICollection<ServiceType> ServiceTypes { get; set; }
    }
}
