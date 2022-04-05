using AlApar.Models.Animal.View;
using AlApar.Classes.Animal;

namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class AnimalController : CommonController<IAnimalCrud, AnimalContext, ViewAnimalAd, Form, ImageName, AnimalAd, AnimalContact, AnimalLog, AnimalCategory, AnimalPhoto, AnimalStory>
    {
        public AnimalController(ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IAnimalCrud animalCrud, AnimalContext _db, IUtility utility, IWebHostEnvironment webHostEnvironment, IMemoryCache memoryCache) :
            base(tokenService, user, userContext, jwtOption, animalCrud, _db, utility, webHostEnvironment, memoryCache)
        {

        }


    }
}
