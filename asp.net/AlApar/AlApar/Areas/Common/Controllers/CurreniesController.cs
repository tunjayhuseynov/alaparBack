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
    public class CurreniesController : Controller
    {
        private readonly alAparContext _context;

        public CurreniesController()
        {
            _context = new alAparContext();
        }

        // GET: Common/Currenies
        public async Task<IActionResult> Index()
        {
            return View(await _context.Currency.ToListAsync());
        }

        // GET: Common/Currenies/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var curreny = await _context.Currency
                .FirstOrDefaultAsync(m => m.Id == id);
            if (curreny == null)
            {
                return NotFound();
            }

            return View(curreny);
        }

        // GET: Common/Currenies/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Common/Currenies/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] Currency curreny)
        {
            if (ModelState.IsValid)
            {
                _context.Add(curreny);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(curreny);
        }

        // GET: Common/Currenies/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var curreny = await _context.Currency.FindAsync(id);
            if (curreny == null)
            {
                return NotFound();
            }
            return View(curreny);
        }

        // POST: Common/Currenies/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] Currency curreny)
        {
            if (id != curreny.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(curreny);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CurrenyExists(curreny.Id))
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
            return View(curreny);
        }

        // GET: Common/Currenies/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var curreny = await _context.Currency
                .FirstOrDefaultAsync(m => m.Id == id);
            if (curreny == null)
            {
                return NotFound();
            }

            return View(curreny);
        }

        // POST: Common/Currenies/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var curreny = await _context.Currency.FindAsync(id);
            _context.Currency.Remove(curreny);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CurrenyExists(int id)
        {
            return _context.Currency.Any(e => e.Id == id);
        }
    }
}
