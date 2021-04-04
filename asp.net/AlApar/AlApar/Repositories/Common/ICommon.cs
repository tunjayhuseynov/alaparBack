using AlApar.Classes;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Common
{
    public interface ICommon<T,C,F>
    {
        string TempFolder { get; }
        string MainFolder { get; }
        
        // GET 
        public Task<object> getForm(C db);
        public Task<T> getPersonalAd(int id, C db);

        // POST
        public Task<object> PostFilter(F res, C db, int skip, int take, IUtility utility);
        public Task<object> saveTempImage(IFormFile image, IUtility _utility, IWebHostEnvironment _webHostEnvironment);
        public Task addToDb(F form, C db, IUtility utility, IWebHostEnvironment _webHostEnvironment);

        // DELETE
        public Task deleteTempImage(string name, IUtility utility, IWebHostEnvironment _webHostEnvironment);

    }
}
