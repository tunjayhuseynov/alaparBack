using AlApar.Classes.Service;
using AlApar.Models.Service;
using AlApar.Models.Service.Views;
using AlApar.Repositories.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Service
{
    public interface IServiceCrud : ICommon<ViewServiceAd, ServiceContext, Form, ServiceAd, ServiceContact, ServiceLog, ServiceCategory, ServiceStory>
    {
    }
}
