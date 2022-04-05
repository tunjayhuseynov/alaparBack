using AlApar.Models.Child.Views;
using AlApar.Models.CommonModel;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildPhoto : CommonImages
    {
        public virtual ChildAd Ad { get; set; }
        public virtual ViewChildAd ViewChildAd { get; set; }
    }
}
