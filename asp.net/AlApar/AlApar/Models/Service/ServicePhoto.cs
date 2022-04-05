using AlApar.Models.CommonModel;
using AlApar.Models.Service.Views;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Service
{
    public partial class ServicePhoto : CommonImages
    {

        public virtual ServiceAd Ad { get; set; }
        public virtual ViewServiceAd ViewServiceAd { get; set; }
    }
}
