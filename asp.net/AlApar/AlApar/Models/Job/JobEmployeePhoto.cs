using AlApar.Models.Job.Views;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobEmployeePhoto
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public long? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }

        public virtual JobAd Ad { get; set; }
        public virtual ViewJobAds ViewJobAd { get; set; }
    }
}
