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
    public class ElectroCategoriesController : Controller
    {
        private readonly ElectroContext _context;

        public ElectroCategoriesController(ElectroContext context)
        {
            _context = context;
        }

        // GET: Electro/ElectroCategories
        public async Task<IActionResult> Index()
        {
            return View(await _context.ElectroCategories.ToListAsync());
        }

        // GET: Electro/ElectroCategories/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var electroCategories = await _context.ElectroCategories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (electroCategories == null)
            {
                return NotFound();
            }

            return View(electroCategories);
        }

        // GET: Electro/ElectroCategories/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Electro/ElectroCategories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] ElectroCategories electroCategories)
        {
            if (ModelState.IsValid)
            {
                _context.Add(electroCategories);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(electroCategories);
        }

        // GET: Electro/ElectroCategories/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var electroCategories = await _context.ElectroCategories.FindAsync(id);
            if (electroCategories == null)
            {
                return NotFound();
            }
            return View(electroCategories);
        }

        // POST: Electro/ElectroCategories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] ElectroCategories electroCategories)
        {
            if (id != electroCategories.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(electroCategories);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ElectroCategoriesExists(electroCategories.Id))
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
            return View(electroCategories);
        }

        // GET: Electro/ElectroCategories/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var electroCategories = await _context.ElectroCategories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (electroCategories == null)
            {
                return NotFound();
            }

            return View(electroCategories);
        }

        // POST: Electro/ElectroCategories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var electroCategories = await _context.ElectroCategories.FindAsync(id);
            _context.ElectroCategories.Remove(electroCategories);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ElectroCategoriesExists(int id)
        {
            return _context.ElectroCategories.Any(e => e.Id == id);
        }
    }
}
