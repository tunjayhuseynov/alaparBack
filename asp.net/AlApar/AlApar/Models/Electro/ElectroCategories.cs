using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public class ElectroCategories : TCategory
    {
        public ElectroCategories()
        {
            Ads = new HashSet<ElectroAds>();
            Types = new HashSet<ElectroTypes>();
            Marks = new HashSet<ElectroPhoneMarks>();
            Operators = new HashSet<ElectroOperators>();
            ComputerMarks = new HashSet<ElectroComputerMarks>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public bool? ActivateType { get; set; }
        public bool? ActivatePhoneMark { get; set; }
        public bool? ActivateComputerMark { get; set; }
        public bool? ActivateOperator { get; set; }

        [Column("activateTitle")]
        public bool? ActivateTitle { get; set; }

        public virtual ICollection<ElectroAds> Ads { get; set; }
        public virtual ICollection<ElectroTypes> Types { get; set; }
        public virtual ICollection<ElectroPhoneMarks> Marks { get; set; }
        public virtual ICollection<ElectroOperators> Operators { get; set; }
        public virtual ICollection<ElectroComputerMarks> ComputerMarks { get; set; }
    }
}
