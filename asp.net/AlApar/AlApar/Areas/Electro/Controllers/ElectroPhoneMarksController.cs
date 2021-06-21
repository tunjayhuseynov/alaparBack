using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AlApar.Models.Electro;

namespace AlApar.Areas.Electro.Controllers
{
    [Area("Electro")]
    public class ElectroPhoneMarksController : Controller
    {
        private readonly ElectroContext _context;

        public ElectroPhoneMarksController(ElectroContext context)
        {
            _context = context;
        }

        // GET: Electro/ElectroPhoneMarks
        public async Task<IActionResult> Index()
        {
            return View(await _context.ElectroPhoneMarks.ToListAsync());
        }

        // GET: Electro/ElectroPhoneMarks/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var electroPhoneMarks = await _context.ElectroPhoneMarks
                .FirstOrDefaultAsync(m => m.Id == id);
            if (electroPhoneMarks == null)
            {
                return NotFound();
            }

            return View(electroPhoneMarks);
        }

        // GET: Electro/ElectroPhoneMarks/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Electro/ElectroPhoneMarks/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] ElectroPhoneMarks electroPhoneMarks)
        {
            if (ModelState.IsValid)
            {
                _context.Add(electroPhoneMarks);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(electroPhoneMarks);
        }

        // GET: Electro/ElectroPhoneMarks/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var electroPhoneMarks = await _context.ElectroPhoneMarks.FindAsync(id);
            if (electroPhoneMarks == null)
            {
                return NotFound();
            }
            return View(electroPhoneMarks);
        }

        // POST: Electro/ElectroPhoneMarks/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] ElectroPhoneMarks electroPhoneMarks)
        {
            if (id != electroPhoneMarks.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(electroPhoneMarks);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ElectroPhoneMarksExists(electroPhoneMarks.Id))
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
            return View(electroPhoneMarks);
        }

        // GET: Electro/ElectroPhoneMarks/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var electroPhoneMarks = await _context.ElectroPhoneMarks
                .FirstOrDefaultAsync(m => m.Id == id);
            if (electroPhoneMarks == null)
            {
                return NotFound();
            }

            return View(electroPhoneMarks);
        }

        // POST: Electro/ElectroPhoneMarks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var electroPhoneMarks = await _context.ElectroPhoneMarks.FindAsync(id);
            _context.ElectroPhoneMarks.Remove(electroPhoneMarks);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ElectroPhoneMarksExists(int id)
        {
            return _context.ElectroPhoneMarks.Any(e => e.Id == id);
        }
    }
}
