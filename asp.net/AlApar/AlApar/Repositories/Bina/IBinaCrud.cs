using AlApar.Classes;
using AlApar.Classes.Bina;
using AlApar.Models;
using AlApar.Models.Bina.Views;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.Drawing;
using System.Threading.Tasks;

namespace AlApar.Repositories.Bina
{
    public interface IBinaCrud
    {
        string TempFolder { get;}
        string MainFolder { get;}

        public Task<object> getForm(BinaContext db);

        public Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment);

        public Task deleteTempImage(string name, IWebHostEnvironment _webHostEnvironment);

        public Task addToDb(Form form, BinaContext db, IWebHostEnvironment _webHostEnvironment);

        public Task<ViewBinaPersonalGeneral> getPersonalAd(int id, BinaContext db);

        public Size GetThumbnailSize(Image original);

        public Task<object> PostFilter(Form res, BinaContext db, int skip, int take);

        public int FloorPlace(ViewBinaPersonalGeneral ad);
    }
}
