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
    public class SellTypesController : Controller
    {
        private readonly alAparContext _context;

        public SellTypesController()
        {
            _context = new alAparContext();
        }

        // GET: Common/SellTypes
        public async Task<IActionResult> Index()
        {
            return View(await _context.SellTypes.ToListAsync());
        }

        // GET: Common/SellTypes/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var sellTypes = await _context.SellTypes
                .FirstOrDefaultAsync(m => m.Id == id);
            if (sellTypes == null)
            {
                return NotFound();
            }

            return View(sellTypes);
        }

        // GET: Common/SellTypes/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Common/SellTypes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] SellTypes sellTypes)
        {
            if (ModelState.IsValid)
            {
                _context.Add(sellTypes);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(sellTypes);
        }

        // GET: Common/SellTypes/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var sellTypes = await _context.SellTypes.FindAsync(id);
            if (sellTypes == null)
            {
                return NotFound();
            }
            return View(sellTypes);
        }

        // POST: Common/SellTypes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] SellTypes sellTypes)
        {
            if (id != sellTypes.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(sellTypes);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!SellTypesExists(sellTypes.Id))
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
            return View(sellTypes);
        }

        // GET: Common/SellTypes/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var sellTypes = await _context.SellTypes
                .FirstOrDefaultAsync(m => m.Id == id);
            if (sellTypes == null)
            {
                return NotFound();
            }

            return View(sellTypes);
        }

        // POST: Common/SellTypes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var sellTypes = await _context.SellTypes.FindAsync(id);
            _context.SellTypes.Remove(sellTypes);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool SellTypesExists(int id)
        {
            return _context.SellTypes.Any(e => e.Id == id);
        }
    }
}
