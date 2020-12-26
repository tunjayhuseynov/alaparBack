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
    public class BinaRentPaymentTypesController : Controller
    {
        private readonly alAparContext _context;

        public BinaRentPaymentTypesController()
        {
            _context = new alAparContext();
        }

        // GET: Bina/BinaRentPaymentTypes
        public async Task<IActionResult> Index()
        {
            return View(await _context.BinaRentPaymentTypes.ToListAsync());
        }

        // GET: Bina/BinaRentPaymentTypes/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaRentPaymentTypes = await _context.BinaRentPaymentTypes
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaRentPaymentTypes == null)
            {
                return NotFound();
            }

            return View(binaRentPaymentTypes);
        }

        // GET: Bina/BinaRentPaymentTypes/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Bina/BinaRentPaymentTypes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] BinaRentPaymentTypes binaRentPaymentTypes)
        {
            if (ModelState.IsValid)
            {
                _context.Add(binaRentPaymentTypes);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(binaRentPaymentTypes);
        }

        // GET: Bina/BinaRentPaymentTypes/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaRentPaymentTypes = await _context.BinaRentPaymentTypes.FindAsync(id);
            if (binaRentPaymentTypes == null)
            {
                return NotFound();
            }
            return View(binaRentPaymentTypes);
        }

        // POST: Bina/BinaRentPaymentTypes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] BinaRentPaymentTypes binaRentPaymentTypes)
        {
            if (id != binaRentPaymentTypes.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(binaRentPaymentTypes);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BinaRentPaymentTypesExists(binaRentPaymentTypes.Id))
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
            return View(binaRentPaymentTypes);
        }

        // GET: Bina/BinaRentPaymentTypes/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaRentPaymentTypes = await _context.BinaRentPaymentTypes
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaRentPaymentTypes == null)
            {
                return NotFound();
            }

            return View(binaRentPaymentTypes);
        }

        // POST: Bina/BinaRentPaymentTypes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var binaRentPaymentTypes = await _context.BinaRentPaymentTypes.FindAsync(id);
            _context.BinaRentPaymentTypes.Remove(binaRentPaymentTypes);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BinaRentPaymentTypesExists(int id)
        {
            return _context.BinaRentPaymentTypes.Any(e => e.Id == id);
        }
    }
}
