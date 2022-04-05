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
        public Repositories.Status.Type Type { get; }
        public string Target { get; }
        public string SelfName { get; }

        public FilterCheckAttribute(Repositories.Status.Type type, string target, [CallerMemberName] string selfName = null)
        {
            Type = type;
            Target = target;
            SelfName = selfName;
        }
    }
}
