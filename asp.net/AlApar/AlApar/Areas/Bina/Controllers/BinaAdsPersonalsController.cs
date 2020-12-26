using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AlApar.Models;

namespace AlApar.Areas.Bina.Controllers
{
    [Area("Bina")]
    public class BinaAdsPersonalsController : Controller
    {
        private readonly alAparContext _context;

        public BinaAdsPersonalsController()
        {
            _context = new alAparContext();
        }

        // GET: Bina/BinaAdsPersonals
        public async Task<IActionResult> Index()
        {
            var alAparContext = _context.BinaAdsPersonal.Include(b => b.AdPackage).Include(b => b.AdStatus).Include(b => b.Category).Include(b => b.City).Include(b => b.Currency).Include(b => b.LandAppointment).Include(b => b.Metro).Include(b => b.PersonalContact).Include(b => b.Region).Include(b => b.RentPaymentType).Include(b => b.SellType).Include(b => b.Village);
            return View(await alAparContext.ToListAsync());
        }

        // GET: Bina/BinaAdsPersonals/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaAdsPersonal = await _context.BinaAdsPersonal
                .Include(b => b.AdPackage)
                .Include(b => b.AdStatus)
                .Include(b => b.Category)
                .Include(b => b.City)
                .Include(b => b.Currency)
                .Include(b => b.LandAppointment)
                .Include(b => b.Metro)
                .Include(b => b.PersonalContact)
                .Include(b => b.Region)
                .Include(b => b.RentPaymentType)
                .Include(b => b.SellType)
                .Include(b => b.Village)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaAdsPersonal == null)
            {
                return NotFound();
            }

            return View(binaAdsPersonal);
        }

        // GET: Bina/BinaAdsPersonals/Create
        public IActionResult Create()
        {
            ViewData["AdPackageId"] = new SelectList(_context.AdPackages, "Id", "Name");
            ViewData["AdStatusId"] = new SelectList(_context.AdStatuses, "Id", "Name");
            ViewData["CategoryId"] = new SelectList(_context.BinaCategories, "Id", "Name");
            ViewData["CityId"] = new SelectList(_context.Cities, "Id", "Name");
            ViewData["CurrencyId"] = new SelectList(_context.Curreny, "Id", "Name");
            ViewData["LandAppointmentId"] = new SelectList(_context.BinaLandAppointments, "Id", "Name");
            ViewData["MetroId"] = new SelectList(_context.Metros, "Id", "Name");
            ViewData["PersonalContactId"] = new SelectList(_context.PersonalContacts, "Id", "Id");
            ViewData["RegionId"] = new SelectList(_context.Regions, "Id", "Name");
            ViewData["RentPaymentTypeId"] = new SelectList(_context.BinaRentPaymentTypes, "Id", "Name");
            ViewData["SellTypeId"] = new SelectList(_context.SellTypes, "Id", "Name");
            ViewData["VillageId"] = new SelectList(_context.Villages, "Id", "Name");
            return View();
        }

        // POST: Bina/BinaAdsPersonals/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,CreatedDate,ModifiedDate,FromDate,TillDate,CategoryId,AdStatusId,AdPackageId,CityId,RegionId,VillageId,MetroId,SellTypeId,RentPaymentTypeId,Price,CurrencyId,AreaSize,Adress,Longitude,Latitude,About,PersonalContactId,HasLicense,LandAppointmentId,HasMortgage,RoomAmount,FloorAmount,Floor,Viewed")] BinaAdsPersonal binaAdsPersonal)
        {
            if (ModelState.IsValid)
            {
                _context.Add(binaAdsPersonal);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["AdPackageId"] = new SelectList(_context.AdPackages, "Id", "Name", binaAdsPersonal.AdPackageId);
            ViewData["AdStatusId"] = new SelectList(_context.AdStatuses, "Id", "Name", binaAdsPersonal.AdStatusId);
            ViewData["CategoryId"] = new SelectList(_context.BinaCategories, "Id", "Name", binaAdsPersonal.CategoryId);
            ViewData["CityId"] = new SelectList(_context.Cities, "Id", "Name", binaAdsPersonal.CityId);
            ViewData["CurrencyId"] = new SelectList(_context.Curreny, "Id", "Name", binaAdsPersonal.CurrencyId);
            ViewData["LandAppointmentId"] = new SelectList(_context.BinaLandAppointments, "Id", "Name", binaAdsPersonal.LandAppointmentId);
            ViewData["MetroId"] = new SelectList(_context.Metros, "Id", "Name", binaAdsPersonal.MetroId);
            ViewData["PersonalContactId"] = new SelectList(_context.PersonalContacts, "Id", "Id", binaAdsPersonal.PersonalContactId);
            ViewData["RegionId"] = new SelectList(_context.Regions, "Id", "Name", binaAdsPersonal.RegionId);
            ViewData["RentPaymentTypeId"] = new SelectList(_context.BinaRentPaymentTypes, "Id", "Name", binaAdsPersonal.RentPaymentTypeId);
            ViewData["SellTypeId"] = new SelectList(_context.SellTypes, "Id", "Name", binaAdsPersonal.SellTypeId);
            ViewData["VillageId"] = new SelectList(_context.Villages, "Id", "Name", binaAdsPersonal.VillageId);
            return View(binaAdsPersonal);
        }

        // GET: Bina/BinaAdsPersonals/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaAdsPersonal = await _context.BinaAdsPersonal.FindAsync(id);
            if (binaAdsPersonal == null)
            {
                return NotFound();
            }
            ViewData["AdPackageId"] = new SelectList(_context.AdPackages, "Id", "Name", binaAdsPersonal.AdPackageId);
            ViewData["AdStatusId"] = new SelectList(_context.AdStatuses, "Id", "Name", binaAdsPersonal.AdStatusId);
            ViewData["CategoryId"] = new SelectList(_context.BinaCategories, "Id", "Name", binaAdsPersonal.CategoryId);
            ViewData["CityId"] = new SelectList(_context.Cities, "Id", "Name", binaAdsPersonal.CityId);
            ViewData["CurrencyId"] = new SelectList(_context.Curreny, "Id", "Name", binaAdsPersonal.CurrencyId);
            ViewData["LandAppointmentId"] = new SelectList(_context.BinaLandAppointments, "Id", "Name", binaAdsPersonal.LandAppointmentId);
            ViewData["MetroId"] = new SelectList(_context.Metros, "Id", "Name", binaAdsPersonal.MetroId);
            ViewData["PersonalContactId"] = new SelectList(_context.PersonalContacts, "Id", "Id", binaAdsPersonal.PersonalContactId);
            ViewData["RegionId"] = new SelectList(_context.Regions, "Id", "Name", binaAdsPersonal.RegionId);
            ViewData["RentPaymentTypeId"] = new SelectList(_context.BinaRentPaymentTypes, "Id", "Name", binaAdsPersonal.RentPaymentTypeId);
            ViewData["SellTypeId"] = new SelectList(_context.SellTypes, "Id", "Name", binaAdsPersonal.SellTypeId);
            ViewData["VillageId"] = new SelectList(_context.Villages, "Id", "Name", binaAdsPersonal.VillageId);
            return View(binaAdsPersonal);
        }

        // POST: Bina/BinaAdsPersonals/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,CreatedDate,ModifiedDate,FromDate,TillDate,CategoryId,AdStatusId,AdPackageId,CityId,RegionId,VillageId,MetroId,SellTypeId,RentPaymentTypeId,Price,CurrencyId,AreaSize,Adress,Longitude,Latitude,About,PersonalContactId,HasLicense,LandAppointmentId,HasMortgage,RoomAmount,FloorAmount,Floor,Viewed")] BinaAdsPersonal binaAdsPersonal)
        {
            if (id != binaAdsPersonal.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(binaAdsPersonal);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BinaAdsPersonalExists(binaAdsPersonal.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["AdPackageId"] = new SelectList(_context.AdPackages, "Id", "Name", binaAdsPersonal.AdPackageId);
            ViewData["AdStatusId"] = new SelectList(_context.AdStatuses, "Id", "Name", binaAdsPersonal.AdStatusId);
            ViewData["CategoryId"] = new SelectList(_context.BinaCategories, "Name", "Id", binaAdsPersonal.CategoryId);
            ViewData["CityId"] = new SelectList(_context.Cities, "Id", "Name", binaAdsPersonal.CityId);
            ViewData["CurrencyId"] = new SelectList(_context.Curreny, "Id", "Name", binaAdsPersonal.CurrencyId);
            ViewData["LandAppointmentId"] = new SelectList(_context.BinaLandAppointments, "Id", "Name", binaAdsPersonal.LandAppointmentId);
            ViewData["MetroId"] = new SelectList(_context.Metros, "Id", "Name", binaAdsPersonal.MetroId);
            ViewData["PersonalContactId"] = new SelectList(_context.PersonalContacts, "Id", "Id", binaAdsPersonal.PersonalContactId);
            ViewData["RegionId"] = new SelectList(_context.Regions, "Id", "Name", binaAdsPersonal.RegionId);
            ViewData["RentPaymentTypeId"] = new SelectList(_context.BinaRentPaymentTypes, "Id", "Name", binaAdsPersonal.RentPaymentTypeId);
            ViewData["SellTypeId"] = new SelectList(_context.SellTypes, "Id", "Name", binaAdsPersonal.SellTypeId);
            ViewData["VillageId"] = new SelectList(_context.Villages, "Id", "Name", binaAdsPersonal.VillageId);
            return View(binaAdsPersonal);
        }

        // GET: Bina/BinaAdsPersonals/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaAdsPersonal = await _context.BinaAdsPersonal
                .Include(b => b.AdPackage)
                .Include(b => b.AdStatus)
                .Include(b => b.Category)
                .Include(b => b.City)
                .Include(b => b.Currency)
                .Include(b => b.LandAppointment)
                .Include(b => b.Metro)
                .Include(b => b.PersonalContact)
                .Include(b => b.Region)
                .Include(b => b.RentPaymentType)
                .Include(b => b.SellType)
                .Include(b => b.Village)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaAdsPersonal == null)
            {
                return NotFound();
            }

            return View(binaAdsPersonal);
        }

        // POST: Bina/BinaAdsPersonals/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var binaAdsPersonal = await _context.BinaAdsPersonal.FindAsync(id);
            _context.BinaAdsPersonal.Remove(binaAdsPersonal);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BinaAdsPersonalExists(int id)
        {
            return _context.BinaAdsPersonal.Any(e => e.Id == id);
        }
    }
}
