using AlApar.Classes.Child;
using AlApar.Models.Child;
using AlApar.Models.Child.Views;
using AlApar.Repositories.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Child
{
    public interface IChildCrud : ICommon<ViewChildAd, ChildContext, Form, ChildAd, ChildContact, ChildLog, ChildCategory>
    {
    }
}
