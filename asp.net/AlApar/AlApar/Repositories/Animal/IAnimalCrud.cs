using AlApar.Classes.Animal;
using AlApar.Models.Animal;
using AlApar.Models.Animal.View;
using AlApar.Repositories.Common;

namespace AlApar.Repositories.Animal
{
    public interface IAnimalCrud : ICommon<ViewAnimalAd, AnimalContext, Form, AnimalAd, AnimalContact, AnimalLog>
    {
    }
}
