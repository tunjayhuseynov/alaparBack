using AlApar.Models.Auto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Auto
{
    public interface IAutoCrud
    {
        public Task<object> getForm(AutoContext db);
    }
}
