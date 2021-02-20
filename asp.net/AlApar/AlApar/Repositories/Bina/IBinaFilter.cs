using AlApar.Classes.Bina;
using AlApar.Models;
using System.Threading.Tasks;

namespace AlApar.Repositories
{
    public interface IBinaFilter
    {
        public Task<object> Get(alAparContext db);

        public Task<object> Post(filterResponse res, alAparContext db);

        
    }
}
