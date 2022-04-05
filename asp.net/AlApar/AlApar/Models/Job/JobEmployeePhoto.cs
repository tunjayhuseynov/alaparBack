using AlApar.Models.CommonModel;
using AlApar.Models.Job.Views;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobEmployeePhoto : CommonImages
    {

        public virtual JobAd Ad { get; set; }
        public virtual ViewJobAds ViewJobAd { get; set; }
    }
}
