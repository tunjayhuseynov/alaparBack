using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.CommonModel
{
    public class CommonStory
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public int? Views { get; set; } = 0;
        public string Description { get; set; }
        public string Link { get; set; }
        public string VideoPath { get; set; }

        [NotMapped()]
        public string Video { get; set; }
        public long? AdId { get; set; }
        public long? UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual Users User { get; set; }
    }
}
