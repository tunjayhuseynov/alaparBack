﻿using AlApar.Classes.Service;
using AlApar.Models.Service;
using AlApar.Models.Service.Views;
using AlApar.Repositories.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Repositories.Service
{
    public class ServiceCrud : Common<ViewServiceAd, ServiceContext, Form, ServiceAd, ServiceLog, ServiceContact, ServicePhoto, ServiceCategory>, IServiceCrud
    {
        public override string TempFolder => "images/service/temporarily";
        public override string MainFolder => "images/service/personal";

        public override Func<ServiceContext, int?, int, int, IAsyncEnumerable<ViewServiceAd>> FilterQuery => EF.CompileAsyncQuery((ServiceContext db, int? id, int skip, int take) => db.ViewServiceAds.Include(w => w.Images).AsNoTracking().Where(w => w.CategoryId == id).OrderBy(w => w.ModifiedDate).Skip(skip).Take(take));
        public override async Task<object> getForm(ServiceContext db)
        {

            return new
            {

            };
        }

        public override async Task<ViewServiceAd> getPersonalAd(int id, ServiceContext db)
        {
            return await db.ViewServiceAds.Include(w => w.Images).AsNoTracking().FirstOrDefaultAsync(w => w.Id == id);

        }
    }
}
