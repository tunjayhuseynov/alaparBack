using AlApar.Models.Auto;
using AlApar.Repositories.Auto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class AutoController : ControllerBase
    {
        private readonly IAutoCrud _crud;
        private readonly AutoContext db;
        public AutoController(IAutoCrud autoCrud, AutoContext _db)
        {
            _crud = autoCrud;
            db = _db;
        }

        [Route("Form")]
        [HttpGet]
        public async Task<object> getForm()
        {
            return await _crud.getForm(db);
        }
    }
}
