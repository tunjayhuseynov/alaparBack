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
    public class MetrosController : Controller
    {
        private readonly alAparContext _context;

        public MetrosController()
        {
            _context = new alAparContext();
        }

        // GET: Common/Metros
        public async Task<IActionResult> Index()
        {
            return View(await _context.Metros.ToListAsync());
        }

        // GET: Common/Metros/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var metros = await _context.Metros
                .FirstOrDefaultAsync(m => m.Id == id);
            if (metros == null)
            {
                return NotFound();
            }

            return View(metros);
        }

        // GET: Common/Metros/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Common/Metros/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] Metros metros)
        {
            if (ModelState.IsValid)
            {
                _context.Add(metros);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(metros);
        }

        // GET: Common/Metros/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var metros = await _context.Metros.FindAsync(id);
            if (metros == null)
            {
                return NotFound();
            }
            return View(metros);
        }

        // POST: Common/Metros/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] Metros metros)
        {
            if (id != metros.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(metros);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MetrosExists(metros.Id))
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
            return View(metros);
        }

        // GET: Common/Metros/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var metros = await _context.Metros
                .FirstOrDefaultAsync(m => m.Id == id);
            if (metros == null)
            {
                return NotFound();
            }

            return View(metros);
        }

        // POST: Common/Metros/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var metros = await _context.Metros.FindAsync(id);
            _context.Metros.Remove(metros);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool MetrosExists(int id)
        {
            return _context.Metros.Any(e => e.Id == id);
        }
    }
}
