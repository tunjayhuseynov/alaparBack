using AlApar.Models.CommonModel;
using AlApar.Models.Hobby.Views;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Hobby
{
    public partial class HobbyPhoto : CommonImages
    {

        [ForeignKey("AdId")]
        public virtual HobbyAd Ad { get; set; }
        public virtual ViewHobbyAd ViewHobbyAd { get; set; }
    }
}
