using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Classes
{
    public class Utility : IUtility
    {

        List<string> IUtility.ImageTypes { get => new List<string> {
            "image/jpeg",
            "image/png"
        }; }
    }
}
