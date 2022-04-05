using AlApar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlApar.Middleware.TokenService;

namespace AlApar.Middleware
{
    public interface ITokenService
    {
        string BuildToken(string key, string issuer, Users user, bool refreshToken = false);
        TokenValidation IsTokenValid(string key, string issuer, string audience, string token);
    }
}
