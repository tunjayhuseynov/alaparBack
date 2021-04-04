using AlApar.Classes;
using AlApar.Classes.Bina;
using AlApar.Models;
using AlApar.Models.Bina.Views;
using AlApar.Repositories.Common;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace AlApar.Repositories.Bina
{
    public interface IBinaCrud : ICommon<ViewBinaPersonalGeneral, BinaContext, Form>
    {
        public int FloorPlace(ViewBinaPersonalGeneral ad);
    }
}
