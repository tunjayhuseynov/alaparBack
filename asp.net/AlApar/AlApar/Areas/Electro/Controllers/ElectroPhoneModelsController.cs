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
    public class ElectroPhoneModelsController : Controller
    {
        private readonly ElectroContext _context;

        public ElectroPhoneModelsController(ElectroContext context)
        {
            _context = context;
        }

        // GET: Electro/ElectroPhoneModels
        public async Task<IActionResult> Index()
        {
            var electroContext = _context.ElectroPhoneModels.Include(e => e.Mark);
            return View(await electroContext.ToListAsync());
        }

        // GET: Electro/ElectroPhoneModels/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var electroPhoneModels = await _context.ElectroPhoneModels
                .Include(e => e.Mark)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (electroPhoneModels == null)
            {
                return NotFound();
            }

            return View(electroPhoneModels);
        }

        // GET: Electro/ElectroPhoneModels/Create
        public IActionResult Create()
        {
            ViewData["MarkId"] = new SelectList(_context.ElectroPhoneMarks, "Id", "Name");
            return View();
        }

        // POST: Electro/ElectroPhoneModels/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,MarkId")] ElectroPhoneModels electroPhoneModels)
        {
            if (ModelState.IsValid)
            {
                _context.Add(electroPhoneModels);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["MarkId"] = new SelectList(_context.ElectroPhoneMarks, "Id", "Id", electroPhoneModels.MarkId);
            return View(electroPhoneModels);
        }

        // GET: Electro/ElectroPhoneModels/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var electroPhoneModels = await _context.ElectroPhoneModels.FindAsync(id);
            if (electroPhoneModels == null)
            {
                return NotFound();
            }
            ViewData["MarkId"] = new SelectList(_context.ElectroPhoneMarks, "Id", "Id", electroPhoneModels.MarkId);
            return View(electroPhoneModels);
        }

        // POST: Electro/ElectroPhoneModels/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,MarkId")] ElectroPhoneModels electroPhoneModels)
        {
            if (id != electroPhoneModels.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(electroPhoneModels);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ElectroPhoneModelsExists(electroPhoneModels.Id))
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
            ViewData["MarkId"] = new SelectList(_context.ElectroPhoneMarks, "Id", "Id", electroPhoneModels.MarkId);
            return View(electroPhoneModels);
        }

        // GET: Electro/ElectroPhoneModels/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var electroPhoneModels = await _context.ElectroPhoneModels
                .Include(e => e.Mark)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (electroPhoneModels == null)
            {
                return NotFound();
            }

            return View(electroPhoneModels);
        }

        // POST: Electro/ElectroPhoneModels/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var electroPhoneModels = await _context.ElectroPhoneModels.FindAsync(id);
            _context.ElectroPhoneModels.Remove(electroPhoneModels);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ElectroPhoneModelsExists(int id)
        {
            return _context.ElectroPhoneModels.Any(e => e.Id == id);
        }
    }
}
