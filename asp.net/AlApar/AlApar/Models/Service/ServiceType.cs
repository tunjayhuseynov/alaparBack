using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Service
{
    public partial class ServiceType
    {
        public ServiceType()
        {
            ServiceAds = new HashSet<ServiceAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }


        public virtual ServiceCategory Category { get; set; }
        public virtual ICollection<ServiceAd> ServiceAds { get; set; }
    }
}
