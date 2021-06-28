using AlApar.Classes;
using AlApar.Middleware;
using AlApar.Models;
using AlApar.Models.Animal;
using AlApar.Models.Auto;
using AlApar.Models.Electro;
using AlApar.Models.Hobby;
using AlApar.Models.Job;
using AlApar.Repositories.Auto;
using AlApar.Repositories.Bina;
using AlApar.Repositories.Hobby;
using AlApar.Repositories.Electro;
using AlApar.Repositories.Job;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using AlApar.Repositories.Animal;
using AlApar.Models.Home;
using AlApar.Repositories.Home;
using AlApar.Repositories.Private;
using AlApar.Models.Private;
using AlApar.Repositories.Service;
using AlApar.Models.Service;
using Microsoft.AspNetCore.HttpOverrides;
using System.Net;

namespace AlApar
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            services.AddDistributedMemoryCache();

            services.AddMemoryCache();
            services.AddSingleton<IBinaCrud,BinaCrud>();
            services.AddSingleton<IUtility,Utility>();
            services.AddSingleton<IAutoCrud, AutoCrud>();
            services.AddSingleton<IElectroCrud, ElectroCrud>();
            services.AddSingleton<IJobCrud, JobCrud>();
            services.AddSingleton<IAnimalCrud, AnimalCrud>();
            services.AddSingleton<IHobbyCrud, HobbyCrud>();
            services.AddSingleton<IHomeCrud, HomeCrud>();
            services.AddSingleton<IPrivateCrud, PrivateCrud>();
            services.AddSingleton<IServiceCrud, ServiceCrud>();

            services.AddDbContext<BinaContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<AutoContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<ElectroContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<JobContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<HobbyContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<AnimalContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<HomeContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<PrivateContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<ServiceContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            
            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromSeconds(10);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });
            services.AddMvc(options => options.EnableEndpointRouting = false);
            services.AddRazorPages();
            services.AddControllersWithViews().AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            //app.UseHttpsRedirection();

           app.UseCors(x => x
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed(origin => true) // allow any origin
                    .AllowCredentials()); // allow credentials*/

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseSession();

            app.UseMiddleware<Auth>();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                app.UseMvc(routes => {
                    routes.MapRoute(
                    name: "Admins",
                    template: "AdminPanel/{area:exists}/{controller=Home}/{action=Index}/{id?}");
                });

                    endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");

                
            });

        }
    }

}
