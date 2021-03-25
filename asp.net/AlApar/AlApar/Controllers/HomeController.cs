using AlApar.Models;
using AlApar.Models.Auto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly AutoContext _db;
        public HomeController(ILogger<HomeController> logger, AutoContext db)
        {
            _logger = logger;
            _db = db;
        }

        public async Task<IActionResult> Index()
        {
            /*
             using StreamReader r = new StreamReader(@"./marks.json");
            string json = r.ReadToEnd();
            List<Marks> arr = JsonConvert.DeserializeObject<List<Marks>>(json);

            foreach (var item in arr)
            {
                string title = item.title;
                string markName = item.name;

                foreach (string name in item.values)
                {
                    AutoModels model = _db.AutoModels.Include(w=>w.Mark).Where(w => w.Name.Trim() == name.Trim() && w.Mark.Name == markName).FirstOrDefault();
                    model.Title = title;
                    _db.AutoModels.Update(model);
                }
            }

            await _db.SaveChangesAsync();
            */
            return View();
        }

        class Marks
        {
            public string title;
            public string name;
            public List<string> values;
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
