using AlApar.Models.Hobby.Views;
using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Hobby
{
    public partial class HobbyPhoto
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public long? AdId { get; set; }
        public int? PrimaryImage { get; set; }
        public string Thumbnail { get; set; }

        public virtual ViewHobbyAd ViewHobbyAd { get; set; }
    }
}
