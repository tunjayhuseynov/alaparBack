
namespace AlApar
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.Configure<MailSettings>(Configuration.GetSection("MailSettings"));
            services.AddTransient<IMailService, MailService>();

            services.AddDistributedMemoryCache();
            services.AddMemoryCache();
            services.AddScoped<IBinaCrud, BinaCrud>();
            services.AddScoped<IUtility, Classes.Utility>();
            services.AddScoped<IAutoCrud, AutoCrud>();
            services.AddScoped<IElectroCrud, ElectroCrud>();
            services.AddScoped<IJobCrud, JobCrud>();
            services.AddScoped<IAnimalCrud, AnimalCrud>();
            services.AddScoped<IHobbyCrud, HobbyCrud>();
            services.AddScoped<IHomeCrud, HomeCrud>();
            services.AddScoped<IPrivateCrud, PrivateCrud>();
            services.AddScoped<IChildCrud, ChildCrud>();
            services.AddScoped<IServiceCrud, ServiceCrud>();
            services.AddScoped<IUser, User>();
            services.AddSignalR();

            services.Configure<Jwt>(Configuration.GetSection("Jwt"));
            services.AddTransient<ITokenService, TokenService>();
            services.AddSingleton<IUserIdProvider, IdBasedUserIdProvider>();

            services.AddDbContext<BinaContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<AutoContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<ElectroContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<JobContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<HobbyContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<AnimalContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<HomeContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<PrivateContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<ChildContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<ServiceContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddDbContext<UserContext>(options => options.UseSqlServer(Configuration.GetValue<string>("ConnectionStrings:AlApar")));
            services.AddAuthentication(options =>
            {
                // Identity made Cookie authentication the default.
                // However, we want JWT Bearer Auth to be the default.
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        var user = new TokenService().IsTokenValid(Configuration["Jwt:Key"], Configuration["Jwt:Issuer"], Configuration["Jwt:Audience"], context.Request.Cookies["access_token"]);

                        if (user.isValid)
                        {
                            context.HttpContext.Items["userToken"] = user;
                            context.Token = context.Request.Cookies["access_token"];
                        }
                        

                        var accessToken = context.Request.Query["access_token"];
                        // If the request is for our hub...
                        var path = context.HttpContext.Request.Path;
                        if (!string.IsNullOrEmpty(accessToken) &&
                            (path.StartsWithSegments("/socket/chat")))
                        {
                            // Read the token out of the query string
                            context.Token = accessToken;
                        }
                        return Task.CompletedTask;
                    }
                };

                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = Configuration["Jwt:Issuer"],
                    ValidAudience = Configuration["Jwt:Issuer"],
                    IssuerSigningKey = new
                    SymmetricSecurityKey
                    (Encoding.UTF8.GetBytes
                    (Configuration["Jwt:Key"]))
                };


            });

            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyMethod().AllowAnyHeader().AllowCredentials());
            });
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromSeconds(10);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });


            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.Unspecified;
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
            app.UseCookiePolicy();
            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();


            app.UseSession();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<SocketHub>("/socket/chat");

                endpoints.MapRazorPages();

                endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");


            });

        }
    }

}
