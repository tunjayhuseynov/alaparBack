using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AlApar.Models;

namespace AlApar.Areas.Common.Controllers
{
    [Area("Common")]
    public class AdPackagesController : Controller
    {
        private readonly alAparContext _context;

        public AdPackagesController()
        {
            _context = new alAparContext();
        }

        // GET: Common/AdPackages
        public async Task<IActionResult> Index()
        {
            return View(await _context.AdPackages.ToListAsync());
        }

        // GET: Common/AdPackages/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adPackages = await _context.AdPackages
                .FirstOrDefaultAsync(m => m.Id == id);
            if (adPackages == null)
            {
                return NotFound();
            }

            return View(adPackages);
        }

        // GET: Common/AdPackages/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Common/AdPackages/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] AdPackages adPackages)
        {
            if (ModelState.IsValid)
            {
                _context.Add(adPackages);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(adPackages);
        }

        // GET: Common/AdPackages/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adPackages = await _context.AdPackages.FindAsync(id);
            if (adPackages == null)
            {
                return NotFound();
            }
            return View(adPackages);
        }

        // POST: Common/AdPackages/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] AdPackages adPackages)
        {
            if (id != adPackages.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(adPackages);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AdPackagesExists(adPackages.Id))
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
            return View(adPackages);
        }

        // GET: Common/AdPackages/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adPackages = await _context.AdPackages
                .FirstOrDefaultAsync(m => m.Id == id);
            if (adPackages == null)
            {
                return NotFound();
            }

            return View(adPackages);
        }

        // POST: Common/AdPackages/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var adPackages = await _context.AdPackages.FindAsync(id);
            _context.AdPackages.Remove(adPackages);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AdPackagesExists(int id)
        {
            return _context.AdPackages.Any(e => e.Id == id);
        }
    }
}
