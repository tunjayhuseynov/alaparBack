using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using AlApar.Classes;
using Microsoft.Extensions.Options;

namespace AlApar.Middleware
{

    public class Auth
    {
        private readonly RequestDelegate _next;
        private readonly ITokenService tokenService;
        private readonly Jwt jwt;

        public Auth(RequestDelegate next, IOptions<Jwt> option)
        {
            _next = next;
            jwt = option.Value;
            tokenService = new TokenService();
        }

        public async Task Invoke(HttpContext context)
        {
            var user = tokenService.IsTokenValid(jwt.Key, jwt.Issuer, jwt.Audience, context.Request.Cookies["access_token"]);
           
            if (user.isValid)
            {
                context.Items["userToken"] = user;
                await _next.Invoke(context);
                return;
            }

            context.Response.StatusCode = 401;
            await context.Response.WriteAsJsonAsync(new { message = "unauthorized" });
        }
    }
}
