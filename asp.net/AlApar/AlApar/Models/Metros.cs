using AlApar.Models.Bina;
using System;
using System.Collections.Generic;

namespace AlApar.Models
{
    public partial class Metros
    {
        public Metros()
        {
            BinaAdsPersonal = new HashSet<BinaAdsPersonal>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int cityId { get; set; }

        public virtual ICollection<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual Cities City { get; set; }
    }
}
