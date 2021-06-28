using AlApar.Classes.Electro;
using AlApar.Models.Electro;
using AlApar.Models.Electro.Views;
using AlApar.Repositories.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Electro
{
    public interface IElectroCrud : ICommon<ViewElectroAds, ElectroContext, Form, ElectroAds, ElectroContacts, ElectroLogs, ElectroCategories>
    {
        public Task<IEnumerable<ElectroPhoneColors>> getColors(ElectroContext db, int modelId);
        public Task<IEnumerable<ElectroPhoneStorages>> getStorages(ElectroContext db, int modelId);
    }
}
