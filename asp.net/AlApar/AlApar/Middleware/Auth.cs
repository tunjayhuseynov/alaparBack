using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AlApar.Middleware
{

    public class Auth
    {
        private readonly RequestDelegate _next;

        public Auth(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Path.Value.Contains("AdminPanel") && context.Session.GetInt32("Logged") != 1)
            {
                    //context.Response.Redirect("/AdminPanel/Sign");
            }
           

            await _next.Invoke(context); 

        }
    }
}
