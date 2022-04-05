using AlApar.Models.CommonModel;
using AlApar.Models.Home.View;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Home
{
    public partial class HomePhoto : CommonImages
    {

        public virtual HomeAd Ad { get; set; }
        public virtual ViewHomeAd ViewHomeAd { get; set; }
    }
}
