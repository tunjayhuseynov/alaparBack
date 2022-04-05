using AlApar.Classes;
using AlApar.Classes.Auto;
using AlApar.Models.Auto;
using AlApar.Models.Auto.View;
using AlApar.Repositories.Common;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Auto
{
    public interface IAutoCrud : ICommon<ViewAutoAds, AutoContext, Form, AutoAds, AutoContacts, AutoAdLogs, AutoTypes, AutoStory>
    {


    }
}
