using AlApar.Models.Auth;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models
{
    public partial class UserContext : DbContext
    {
        public UserContext()
        {

        }

        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {

        }

        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<Wallets> Wallets { get; set; }
        public virtual DbSet<RefreshTokens> RefreshTokens { get; set; }
        public virtual DbSet<Chats> Chats { get; set; }
        public virtual DbSet<ChatUsers> ChatUsers { get; set; }
        public virtual DbSet<Messages> Messages { get; set; }
        public virtual DbSet<BusinessTypes> BusinessTypes { get; set; }
        public virtual DbSet<BusinessAccounts> BusinessAccounts { get; set; }
        public virtual DbSet<BusinessPrices> BusinessPrices { get; set; }
    }
}
