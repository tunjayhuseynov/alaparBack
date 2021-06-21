using AlApar.Classes.Child;
using AlApar.Models.Child;
using AlApar.Models.Child.Views;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Child
{
    public class ChildCrud : Common<ViewChildAd, ChildContext, Form, ChildAd, ChildLog, ChildContact, ChildPhoto>, IChildCrud
    {
        public override string TempFolder => "images/child/temporarily";
        public override string MainFolder => "images/child/personal";


        public override async Task<object> getForm(ChildContext db)
        {

            return new
            {

            };
        }

        public override async Task<ViewChildAd> getPersonalAd(int id, ChildContext db)
        {
            return await db.ViewChildAds.Include(w => w.Images).AsNoTracking().FirstOrDefaultAsync(w => w.Id == id);

        }
    }
}
