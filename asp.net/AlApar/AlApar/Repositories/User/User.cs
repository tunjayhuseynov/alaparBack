using AlApar.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.User
{
    public class User : IUser
    {
        public UserContext _db { get; set; }
        public async Task<Users> getUser(long id)
        {
            return await _db.Users.Include(w=>w.Wallet).Include(w=>w.BusinessAccount).FirstOrDefaultAsync(w => w.Id == id);
        }

        public async Task<Users> getUser(string email)
        {
            return await _db.Users.Where(w => w.Email == email).FirstOrDefaultAsync();
        }

        public async Task<bool> isUserPasswordValid(string email, string password)
        {
            if (isUserValid(email)) {
                Users user = await _db.Users.Where(w => w.Email == email).FirstOrDefaultAsync();

                if (SecurityHelper.HashPassword(password, user.Salt) == user.Password)
                    return true;
            }

            return false;
        }

        public bool isUserValid(string email)
        {
            return _db.Users.Where(w => w.Email == email.Trim()).Count() == 1;
        }


        public async Task<bool?> VerifyEmail(string publicId)
        {
            var email = await _db.Users.Where(w => w.PublicId == publicId).FirstOrDefaultAsync();

            if(email.Status == Status.UserStatus.Waiting.ToString())
            {
                email.Status = Status.UserStatus.Active.ToString();
                _db.Users.Update(email);
                await _db.SaveChangesAsync();

                return true;
            }

            return false;
        }
    }
}
