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
    public class BinaLandAppointmentsController : Controller
    {
        private readonly alAparContext _context;

        public BinaLandAppointmentsController()
        {
            _context = new alAparContext();
        }

        // GET: Bina/BinaLandAppointments
        public async Task<IActionResult> Index()
        {
            return View(await _context.BinaLandAppointments.ToListAsync());
        }

        // GET: Bina/BinaLandAppointments/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaLandAppointments = await _context.BinaLandAppointments
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaLandAppointments == null)
            {
                return NotFound();
            }

            return View(binaLandAppointments);
        }

        // GET: Bina/BinaLandAppointments/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Bina/BinaLandAppointments/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] BinaLandAppointments binaLandAppointments)
        {
            if (ModelState.IsValid)
            {
                _context.Add(binaLandAppointments);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(binaLandAppointments);
        }

        // GET: Bina/BinaLandAppointments/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaLandAppointments = await _context.BinaLandAppointments.FindAsync(id);
            if (binaLandAppointments == null)
            {
                return NotFound();
            }
            return View(binaLandAppointments);
        }

        // POST: Bina/BinaLandAppointments/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] BinaLandAppointments binaLandAppointments)
        {
            if (id != binaLandAppointments.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(binaLandAppointments);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BinaLandAppointmentsExists(binaLandAppointments.Id))
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
            return View(binaLandAppointments);
        }

        // GET: Bina/BinaLandAppointments/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaLandAppointments = await _context.BinaLandAppointments
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaLandAppointments == null)
            {
                return NotFound();
            }

            return View(binaLandAppointments);
        }

        // POST: Bina/BinaLandAppointments/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var binaLandAppointments = await _context.BinaLandAppointments.FindAsync(id);
            _context.BinaLandAppointments.Remove(binaLandAppointments);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BinaLandAppointmentsExists(int id)
        {
            return _context.BinaLandAppointments.Any(e => e.Id == id);
        }
    }
}
