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
    public class BinaCategoriesController : Controller
    {
        private readonly alAparContext _context;

        public BinaCategoriesController()
        {
            _context = new alAparContext();
        }

        // GET: Bina/BinaCategories
        public async Task<IActionResult> Index()
        {
            return View(await _context.BinaCategories.ToListAsync());
        }

        // GET: Bina/BinaCategories/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaCategories = await _context.BinaCategories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaCategories == null)
            {
                return NotFound();
            }

            return View(binaCategories);
        }

        // GET: Bina/BinaCategories/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Bina/BinaCategories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] BinaCategories binaCategories)
        {
            if (ModelState.IsValid)
            {
                _context.Add(binaCategories);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(binaCategories);
        }

        // GET: Bina/BinaCategories/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaCategories = await _context.BinaCategories.FindAsync(id);
            if (binaCategories == null)
            {
                return NotFound();
            }
            return View(binaCategories);
        }

        // POST: Bina/BinaCategories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] BinaCategories binaCategories)
        {
            if (id != binaCategories.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(binaCategories);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BinaCategoriesExists(binaCategories.Id))
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
            return View(binaCategories);
        }

        // GET: Bina/BinaCategories/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaCategories = await _context.BinaCategories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaCategories == null)
            {
                return NotFound();
            }

            return View(binaCategories);
        }

        // POST: Bina/BinaCategories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var binaCategories = await _context.BinaCategories.FindAsync(id);
            _context.BinaCategories.Remove(binaCategories);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BinaCategoriesExists(int id)
        {
            return _context.BinaCategories.Any(e => e.Id == id);
        }
    }
}
