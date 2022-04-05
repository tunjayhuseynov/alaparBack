using AlApar.Models.CommonModel;
using AlApar.Models.Private.View;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivatePhoto : CommonImages
    {

        public virtual PrivateAd Ad { get; set; }
        public virtual ViewPrivateAd ViewPrivateAd { get; set; }
    }
}
