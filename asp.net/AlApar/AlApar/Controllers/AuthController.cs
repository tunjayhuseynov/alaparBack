using AlApar.Models.Auth;


namespace AlApar.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly ITokenService _tokenService;
        private readonly IUser _user;
        private readonly Jwt jwt;
        private readonly UserContext _userContext;
        private readonly CookieOptions refreshCookieOption;
        private readonly CookieOptions accessCookieOption;
        private readonly IMailService mailService;

        public AuthController(IConfiguration configuration, ITokenService tokenService, IUser user, UserContext userContext, IOptions<Jwt> jwtOption, IMailService mailService) {
            _tokenService = tokenService;
            _user = user;
            _user._db = userContext;
            _userContext = userContext;
            jwt = jwtOption.Value;
            this.mailService = mailService;

            refreshCookieOption = new CookieOptions
            {
                Secure = !configuration.GetValue<string>("Mode").Equals("Development"),
                HttpOnly = true,
                MaxAge = TimeSpan.FromDays(14),
                IsEssential = true
            };

            accessCookieOption = new CookieOptions
            {
                Secure = !configuration.GetValue<string>("Mode").Equals("Development"),
                MaxAge = TimeSpan.FromMinutes(30),
                HttpOnly = false,
                IsEssential = true
            };
        }

        public class Login {
            public string Email { get; set; }
            public string Password { get; set; }
        }
        
        [Route("login")]
        [Consumes("application/json")]
        [HttpPost]
        public async Task<IActionResult> getLogin([FromBody] Login body) {
            string email = body.Email.Trim();
            string password = body.Password.Trim();

            if (!string.IsNullOrEmpty(email) && !string.IsNullOrEmpty(password) && await _user.isUserPasswordValid(email, password)) {

                using var transaction = await _userContext.Database.BeginTransactionAsync();

                try
                {
                    var user = await  _user.getUser(email);
                    if(user.LimitlessDuration != null && user.LimitlessDuration.Value.ToUniversalTime() < DateTime.UtcNow.ToUniversalTime())
                    {
                        user.Limitless = false;
                        user.LimitlessDuration = null;
                    }

                    string access_token = _tokenService.BuildToken(jwt.Key, jwt.Issuer, user);
                    string refresh_token = _tokenService.BuildToken(jwt.Key, jwt.Issuer, user, true);
                    
                    RefreshTokens refreshTokens = new()
                    {
                        UserId = user.Id,
                        RefreshToken = refresh_token
                    };

                    await _userContext.RefreshTokens.AddAsync(refreshTokens);
                    await _userContext.SaveChangesAsync();

                    await transaction.CommitAsync();


                    if (user.BusinessAccountId != null)
                    {
                        Response.Cookies.Append("business_user", user.BusinessAccount.Id.ToString(), accessCookieOption);
                    }
                    Response.Cookies.Append("refresh_token", refresh_token, refreshCookieOption);
                    Response.Cookies.Append("access_token", access_token, accessCookieOption);
                    Response.Cookies.Append("user", System.Text.Json.JsonSerializer.Serialize(new { id = user.Id, name = user.Name, email = user.Email, verified = user.Status }), accessCookieOption);

                    return Ok();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    await transaction.RollbackAsync();
                }

            }

            return StatusCode(401, new { message = $"Wrong Credentials" });
        }


        public class Register { 
            public string Name { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        
        }

        [HttpPost]
        [Route("register")]
        [Consumes("application/json")]
        public async Task<IActionResult> register([FromBody]Register userInfo) {
            if (_user.isUserValid(userInfo.Email))
                return StatusCode(401, new { message = "User exists" });

            if(!string.IsNullOrEmpty(userInfo.Name) && !string.IsNullOrEmpty(userInfo.Email) && !string.IsNullOrEmpty(userInfo.Password))
            {
                string salt = SecurityHelper.GenerateSalt(250);
                string password = SecurityHelper.HashPassword(userInfo.Password.Trim(), salt);


                using var transaction = await _userContext.Database.BeginTransactionAsync();

                try
                {
                    Wallets wallet = new()
                    {
                        PublicId = Guid.NewGuid().ToString() + DateTime.Now.ToString("s").Replace(" ", ""),
                        PrivateId = Guid.NewGuid().ToString() + DateTime.Now.ToString("s").Replace(" ", ""),
                        Amount = 0,
                    };
                    await _userContext.Wallets.AddAsync(wallet);
                    await _userContext.SaveChangesAsync();

                    Users users = new()
                    {
                        Name = userInfo.Name.Trim(),
                        Email = userInfo.Email.Trim(),
                        Password = password,
                        Salt = salt,
                        PrivateId = new Random().Next(100000000, 1000000000).ToString("D9"),
                        PublicId = Guid.NewGuid().ToString() + DateTime.Now.ToString("s").Replace(" ", ""),
                        Role = Roles.User.ToString(),
                        AccountType = AccountType.Standart.ToString(),
                        Status = UserStatus.Waiting.ToString(),
                        WalletId = wallet.Id
                    };
                    await _userContext.Users.AddAsync(users);
                    await _userContext.SaveChangesAsync();

                    string access_token = _tokenService.BuildToken(jwt.Key, jwt.Issuer, users);
                    string refresh_token = _tokenService.BuildToken(jwt.Key, jwt.Issuer, users, true);

                    RefreshTokens refreshTokens = new()
                    {
                        UserId = users.Id,
                        RefreshToken = refresh_token
                    };

                    await _userContext.RefreshTokens.AddAsync(refreshTokens);
                    await _userContext.SaveChangesAsync();


                    await SendVerificationMail(users.Email, users.PublicId);
                                       
                    await transaction.CommitAsync();

                    Response.Cookies.Append("refresh_token", refresh_token, refreshCookieOption);
                    Response.Cookies.Append("access_token", access_token, accessCookieOption);
                    Response.Cookies.Append("user", System.Text.Json.JsonSerializer.Serialize(new { id = users.Id, name = users.Name, email = users.Email, verified = UserStatus.Waiting.ToString() }), accessCookieOption);

                    return Ok();
                }
                catch (Exception e)
                {
                    await transaction.RollbackAsync();
                    return StatusCode(500, $"Something is going wrong: {e.Message}");
                }

            }

            return StatusCode(500, "Doldurulmayan sahələr var");
        }


        [Route("sendagain/{id}")]
        public async Task<IActionResult> SendVerificationAgain(long id)
        {
            try
            {
                var user = await _user.getUser(id);

                await SendVerificationMail(user.Email, user.PublicId);

                return Ok();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        public async Task SendVerificationMail(string email, string publicKey)
        {
            var req = new MailRequest() 
            { 
                ToEmail = email,
                Subject = "Hesabınızı Aktiv Edin",
                Body = $"Bu linkə daxil olaraq aktiv edə bilərsiniz: {Request.Scheme + "://" + Request.Host.Value}/api/auth/verify/{publicKey}"
            };

            try
            {
                await mailService.SendEmailAsync(req);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw;
            }
        }

        [Route("updatetoken")]
        public async Task<IActionResult> UpdateTokens([FromQuery] bool redirect = false)
        {
            string refresh_token_cookie = Request.Cookies["refresh_token"];
            if(refresh_token_cookie != null)
            {
                var userInfo = _tokenService.IsTokenValid(jwt.Key, jwt.Issuer, jwt.Audience, refresh_token_cookie);

                if (userInfo.isValid)
                {
                    using var transaction = await _userContext.Database.BeginTransactionAsync();

                    try
                    {
                        var user = await _user.getUser(userInfo.UserId);
                        if (user.LimitlessDuration != null && user.LimitlessDuration.Value.ToUniversalTime() < DateTime.UtcNow.ToUniversalTime())
                        {
                            user.Limitless = false;
                            user.LimitlessDuration = null;
                        }

                        string access_token = _tokenService.BuildToken(jwt.Key, jwt.Issuer, user);
                        string refresh_token = _tokenService.BuildToken(jwt.Key, jwt.Issuer, user, true);

                        RefreshTokens refreshTokens = new()
                        {
                            UserId = user.Id,
                            RefreshToken = refresh_token
                        };

                        await _userContext.RefreshTokens.AddAsync(refreshTokens);
                        await _userContext.SaveChangesAsync();

                        await transaction.CommitAsync();

                        if(user.BusinessAccountId != null)
                        {
                            Response.Cookies.Append("business_user", user.BusinessAccount.Id.ToString(), accessCookieOption);
                        }
                        Response.Cookies.Append("refresh_token", refresh_token, refreshCookieOption);
                        Response.Cookies.Append("access_token", access_token, accessCookieOption);
                        var userData = System.Text.Json.JsonSerializer.Serialize(new { id = user.Id, name = user.Name, email = user.Email, verified = user.Status });
                        Response.Cookies.Append("user", userData, accessCookieOption);
                        if (redirect) return Redirect("/profile");
                        return Ok(new { refresh_token, access_token, userData });
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e.Message);
                        await transaction.RollbackAsync();
                    }
                }
            }

            return StatusCode(401);
        }


        [Route("verify/{publicId}")]
        public async Task<IActionResult> VerifyAccount(string publicId)
        {
            bool? res = await _user.VerifyEmail(publicId);

            if (res == null)
                return Unauthorized(new { message = "There is no such a user" });

            return res == true ? RedirectToAction("UpdateTokens", new { redirect = true }) : StatusCode(418, new { message = "Already Verifed" });
        }



        [Route("logout")]
        public IActionResult Logout()
        {
            if(Request.Cookies["refresh_token"] != null)
                Response.Cookies.Delete("refresh_token");
            
            if (Request.Cookies["access_token"] != null)
                Response.Cookies.Delete("access_token");

            if (Request.Cookies["user"] != null)
                Response.Cookies.Delete("user");

            return Ok();
        }
    }
}
