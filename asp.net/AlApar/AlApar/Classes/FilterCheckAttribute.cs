using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using static AlApar.Repositories.Status;

namespace AlApar.Classes
{
    public class FilterCheckAttribute : Attribute
    {
        public TypeEnum Type { get; }
        public string Target { get; }
        public string SelfName { get; }

        public FilterCheckAttribute(TypeEnum type, string target, [CallerMemberName] string selfName = null)
        {
            Type = type;
            Target = target;
            SelfName = selfName;
        }
    }
}
