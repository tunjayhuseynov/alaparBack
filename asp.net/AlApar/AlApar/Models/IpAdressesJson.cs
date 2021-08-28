using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models
{
    public class IpAdressesJson
    {
        [JsonProperty("ipAdresses")]
        public List<string> IpAdresses { get; set; }
    }

    public class IpAdress 
    { 
        [JsonProperty("userIp")]
        public string UserIp { get; set; }

        [JsonProperty("enteredDatetime")]
        public DateTime EnteredDatetime { get; set; } = DateTime.UtcNow;
    }
}
