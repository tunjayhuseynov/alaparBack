using AlApar.Models.Service.Views;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Service
{
    public partial class ServicePhoto
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public int? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }

        public virtual ServiceAd Ad { get; set; }
        public virtual ViewServiceAd ViewServiceAd { get; set; }
    }
}
