using AlApar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.User
{
    public interface IUser
    {
        public UserContext _db { get; set; }
        public Task<Users> getUser(long id);
        public Task<Users> getUser(string email);
        public bool isUserValid(string email);
        public Task<bool> isUserPasswordValid(string email, string password);
        public Task<bool?> VerifyEmail(string publicId);
    }
}
