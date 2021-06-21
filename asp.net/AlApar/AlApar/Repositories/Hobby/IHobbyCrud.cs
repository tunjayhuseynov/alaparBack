using AlApar.Classes.Hobby;
using AlApar.Models.Hobby;
using AlApar.Models.Hobby.Views;
using AlApar.Repositories.Common;

namespace AlApar.Repositories.Hobby
{
    public interface IHobbyCrud : ICommon<ViewHobbyAd, HobbyContext, Form, HobbyAd, HobbyContact, HobbyLog>
    {
    }
}
