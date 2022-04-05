using AlApar.Classes.Electro;
using AlApar.Models.Electro.Views;
using System.Collections.Generic;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class ElectroController : CommonController<IElectroCrud, ElectroContext, ViewElectroAds, Form, ImageName, ElectroAds, ElectroContacts, ElectroLogs, ElectroCategories, ElectroPhotos, ElectroStory>
    {
        private readonly IElectroCrud _crud;
        private readonly ElectroContext _db;
        public ElectroController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, ElectroContext db, IElectroCrud electroCrud, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache)
        :base(tokenService, user, userContext, jwtOption, electroCrud, db, utility, webHostEnvironment, memoryCache)
        {
            _crud = electroCrud;
            _db = db;
        }

        [Route("color/{id}")]
        public async Task<IEnumerable<ElectroPhoneColors>> getColors(int id)
        {
            return await _crud.getColors(_db, id);
        }

        [Route("storage/{id}")]
        public async Task<IEnumerable<ElectroPhoneStorages>> getStorages(int id)
        {
            return await _crud.getStorages(_db, id);
        }

    }
}
