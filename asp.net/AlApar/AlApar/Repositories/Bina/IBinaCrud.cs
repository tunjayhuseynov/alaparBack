using AlApar.Classes;
using AlApar.Classes.Bina;
using AlApar.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace AlApar.Repositories.Bina
{
    public interface IBinaCrud
    {
        public Task<object> getForm(alAparContext db);

        public Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment);

        public Task addToDb(Form form, alAparContext db, IWebHostEnvironment _webHostEnvironment);

        public Task<object> getPersonalAd(int id, alAparContext db);
    }
}
