using AlApar.Classes;
using AlApar.Classes.Bina;
using AlApar.Models;
using AlApar.Models.Bina;
using AlApar.Models.Bina.Views;
using AlApar.Repositories.Common;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace AlApar.Repositories.Bina
{
    public interface IBinaCrud : ICommon<ViewBinaPersonalGeneral, BinaContext, Form, BinaAds, BinaContacts, BinaAdsLogs, BinaCategories, BinaStory>
    {

    }
}
