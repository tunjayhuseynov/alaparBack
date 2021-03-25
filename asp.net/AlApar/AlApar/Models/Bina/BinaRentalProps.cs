using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Bina
{
    public class BinaRentalProps
    {
        public BinaRentalProps()
        {
            BinaCategories = new HashSet<BinaCategories>();
        }

        public int Id { get; set; }
        public bool? MetbexM { get; set; }
        public bool? QabY { get; set; }
        public bool? PaltarY { get; set; }
        public bool? Soyuducu { get; set; }
        public bool? Tv { get; set; }
        public bool? Kondicioner { get; set; }
        public bool? Internet { get; set; }
        public bool? Telefon { get; set; }
        public bool? Usag { get; set; }
        public bool? Heyvan { get; set; }

        public bool? Otagordaire { get; set; }


        public virtual ICollection<BinaCategories> BinaCategories { get; set; }
    }
}
