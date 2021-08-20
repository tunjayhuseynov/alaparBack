using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Classes
{
    public class commonForm
    {
        [JsonProperty("images")]
        public virtual List<ImageStructure> ImageList { get; set; }
    }
}
