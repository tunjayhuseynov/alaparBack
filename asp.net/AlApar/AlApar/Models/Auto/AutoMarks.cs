using AlApar.Classes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models.Auto
{
    public class AutoMarks : TCategory
    {
        public AutoMarks()
        {
            AutoAds = new HashSet<AutoAds>();
            AutoModels = new HashSet<AutoModels>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        [Column("typeId")]
        public int? TypeId { get; set; }




        public virtual ICollection<AutoAds> AutoAds { get; set; }
        public virtual ICollection<AutoModels> AutoModels { get; set; }

        [ForeignKey("TypeId")]
        public virtual AutoTypes Type { get; set; }
    }
}
