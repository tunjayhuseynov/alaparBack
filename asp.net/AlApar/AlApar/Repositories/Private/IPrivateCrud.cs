using AlApar.Models.Private.View;
using AlApar.Models.Private;
using AlApar.Classes.Private;
using AlApar.Repositories.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace AlApar.Repositories.Private
{
    public interface IPrivateCrud : ICommon<ViewPrivateAd, PrivateContext, Form, PrivateAd, PrivateContact, PrivateLog, PrivateCategory, PrivateStory>
    {
    }
}
