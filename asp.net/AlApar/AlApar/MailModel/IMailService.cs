using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.MailModel
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest mailRequest);

    }
}
