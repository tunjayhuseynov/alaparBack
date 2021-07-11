using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace AlApar.Classes
{
    public class BypassAttribute : Attribute
    {
        public string SelfName { get; set; }
        public BypassAttribute([CallerMemberName] string selfName = null)
        {
            SelfName = selfName;
        }
    }
}
