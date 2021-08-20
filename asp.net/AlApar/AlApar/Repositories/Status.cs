using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories
{
    public class Status
    {
        public enum AdStatus : ushort
        {
            Pending = 1,
            Online = 2,
            Canceled = 3,
            Closed = 4
        }
        
        public enum AdPackage : ushort
        {
            Standart = 1,
            VIP = 2,
            Premium = 3
        }

        public enum TypeEnum
        {
            Min = 1,
            Max = 2,
            Multiple = 3,
            Text = 4
        }
    }
}
