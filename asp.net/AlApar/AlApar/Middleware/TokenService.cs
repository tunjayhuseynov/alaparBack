using AlApar.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AlApar.Middleware
{
    public class TokenService : ITokenService
    {
        private const double EXPIRY_DURATION_MINUTES = 30;
        private const double EXPIRY_DURATION_DAYS = 14;

        public string BuildToken(string key, string issuer, Users user, bool refreshToken = false)
        {
            var claims = new[] {
            new Claim(ClaimTypes.Sid, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.Name),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role.ToString()),
            new Claim(ClaimTypes.NameIdentifier,
            Guid.NewGuid().ToString())
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
            var tokenDescriptor = new JwtSecurityToken(issuer, issuer, claims,
                expires: refreshToken? DateTime.Now.AddDays(EXPIRY_DURATION_DAYS) : DateTime.Now.AddMinutes(EXPIRY_DURATION_MINUTES), signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }

        public class TokenValidation { 
            public bool isValid { get; set; }
            public long UserId { get; set; }
            public string UserName { get; set; }
            public string UserEmail { get; set; }
            public string UserRole { get; set; }
        }
        public TokenValidation IsTokenValid(string key, string issuer, string audience, string token)
        {
            var mySecret = Encoding.UTF8.GetBytes(key);
            var mySecurityKey = new SymmetricSecurityKey(mySecret);
            var tokenHandler = new JwtSecurityTokenHandler();
            try
            {
                tokenHandler.ValidateToken(token,
                new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidIssuer = issuer,
                    ValidAudience = issuer,
                    IssuerSigningKey = mySecurityKey,
                }, out SecurityToken validatedToken);

                var jwtToken = validatedToken as JwtSecurityToken;

                return new TokenValidation() { 
                    isValid = true, 
                    UserId = Convert.ToInt64(jwtToken.Claims.First(w=>w.Type == ClaimTypes.Sid).Value), 
                    UserName = jwtToken.Claims.First(w => w.Type == ClaimTypes.Name).Value,
                    UserEmail = jwtToken.Claims.First(w=>w.Type == ClaimTypes.Email).Value,
                    UserRole = jwtToken.Claims.First(w=>w.Type == ClaimTypes.Role).Value
                };

            }
            catch
            {
                return new TokenValidation() { 
                    isValid = false
                };
            }
        }
    }
}
