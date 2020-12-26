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
    public class VillagesController : Controller
    {
        private readonly alAparContext _context;

        public VillagesController()
        {
            _context = new alAparContext();
        }

        // GET: Common/Villages
        public async Task<IActionResult> Index()
        {
            var alAparContext = _context.Villages.Include(v => v.Region);
            return View(await alAparContext.ToListAsync());
        }

        // GET: Common/Villages/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var villages = await _context.Villages
                .Include(v => v.Region)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (villages == null)
            {
                return NotFound();
            }

            return View(villages);
        }

        // GET: Common/Villages/Create
        public IActionResult Create()
        {
            ViewData["RegionId"] = new SelectList(_context.Regions, "Id", "Name");
            return View();
        }

        // POST: Common/Villages/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,RegionId")] Villages villages)
        {
            if (ModelState.IsValid)
            {
                _context.Add(villages);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["RegionId"] = new SelectList(_context.Regions, "Id", "Id", villages.RegionId);
            return View(villages);
        }

        // GET: Common/Villages/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var villages = await _context.Villages.FindAsync(id);
            if (villages == null)
            {
                return NotFound();
            }
            ViewData["RegionId"] = new SelectList(_context.Regions, "Id", "Name", villages.RegionId);
            return View(villages);
        }

        // POST: Common/Villages/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,RegionId")] Villages villages)
        {
            if (id != villages.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(villages);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!VillagesExists(villages.Id))
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
            ViewData["RegionId"] = new SelectList(_context.Regions, "Id", "Id", villages.RegionId);
            return View(villages);
        }

        // GET: Common/Villages/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var villages = await _context.Villages
                .Include(v => v.Region)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (villages == null)
            {
                return NotFound();
            }

            return View(villages);
        }

        // POST: Common/Villages/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var villages = await _context.Villages.FindAsync(id);
            _context.Villages.Remove(villages);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool VillagesExists(int id)
        {
            return _context.Villages.Any(e => e.Id == id);
        }
    }
}
