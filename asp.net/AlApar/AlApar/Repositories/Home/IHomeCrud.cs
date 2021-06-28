using AlApar.Classes.Home;
using AlApar.Models.Home;
using AlApar.Models.Home.View;
using AlApar.Repositories.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Home
{
    public interface IHomeCrud : ICommon<ViewHomeAd, HomeContext, Form, HomeAd, HomeContact, HomeLog, HomeCategory>
    {
    }
}
