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
    public class AdStatusesController : Controller
    {
        private readonly alAparContext _context;

        public AdStatusesController()
        {
            _context = new alAparContext();
        }

        // GET: Common/AdStatuses
        public async Task<IActionResult> Index()
        {
            return View(await _context.AdStatuses.ToListAsync());
        }

        // GET: Common/AdStatuses/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adStatuses = await _context.AdStatuses
                .FirstOrDefaultAsync(m => m.Id == id);
            if (adStatuses == null)
            {
                return NotFound();
            }

            return View(adStatuses);
        }

        // GET: Common/AdStatuses/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Common/AdStatuses/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] AdStatuses adStatuses)
        {
            if (ModelState.IsValid)
            {
                _context.Add(adStatuses);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(adStatuses);
        }

        // GET: Common/AdStatuses/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adStatuses = await _context.AdStatuses.FindAsync(id);
            if (adStatuses == null)
            {
                return NotFound();
            }
            return View(adStatuses);
        }

        // POST: Common/AdStatuses/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] AdStatuses adStatuses)
        {
            if (id != adStatuses.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(adStatuses);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AdStatusesExists(adStatuses.Id))
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
            return View(adStatuses);
        }

        // GET: Common/AdStatuses/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adStatuses = await _context.AdStatuses
                .FirstOrDefaultAsync(m => m.Id == id);
            if (adStatuses == null)
            {
                return NotFound();
            }

            return View(adStatuses);
        }

        // POST: Common/AdStatuses/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var adStatuses = await _context.AdStatuses.FindAsync(id);
            _context.AdStatuses.Remove(adStatuses);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AdStatusesExists(int id)
        {
            return _context.AdStatuses.Any(e => e.Id == id);
        }
    }
}
