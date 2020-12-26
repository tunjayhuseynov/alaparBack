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
    public class PersonalContactsController : Controller
    {
        private readonly alAparContext _context;

        public PersonalContactsController()
        {
            _context = new alAparContext();
        }

        // GET: Common/PersonalContacts
        public async Task<IActionResult> Index()
        {
            var alAparContext = _context.PersonalContacts.Include(p => p.Ad);
            return View(await alAparContext.ToListAsync());
        }

        // GET: Common/PersonalContacts/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var personalContacts = await _context.PersonalContacts
                .Include(p => p.Ad)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (personalContacts == null)
            {
                return NotFound();
            }

            return View(personalContacts);
        }

        // GET: Common/PersonalContacts/Create
        public IActionResult Create()
        {
            ViewData["AdId"] = new SelectList(_context.BinaAdsPersonal, "Id", "Id");
            return View();
        }

        // POST: Common/PersonalContacts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,ContactNumber,IsCall,IsWp,Email,AdId")] PersonalContacts personalContacts)
        {
            if (ModelState.IsValid)
            {
                _context.Add(personalContacts);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["AdId"] = new SelectList(_context.BinaAdsPersonal, "Id", "Id", personalContacts.AdId);
            return View(personalContacts);
        }

        // GET: Common/PersonalContacts/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var personalContacts = await _context.PersonalContacts.FindAsync(id);
            if (personalContacts == null)
            {
                return NotFound();
            }
            ViewData["AdId"] = new SelectList(_context.BinaAdsPersonal, "Id", "Id", personalContacts.AdId);
            return View(personalContacts);
        }

        // POST: Common/PersonalContacts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,ContactNumber,IsCall,IsWp,Email,AdId")] PersonalContacts personalContacts)
        {
            if (id != personalContacts.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(personalContacts);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PersonalContactsExists(personalContacts.Id))
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
            ViewData["AdId"] = new SelectList(_context.BinaAdsPersonal, "Id", "Id", personalContacts.AdId);
            return View(personalContacts);
        }

        // GET: Common/PersonalContacts/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var personalContacts = await _context.PersonalContacts
                .Include(p => p.Ad)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (personalContacts == null)
            {
                return NotFound();
            }

            return View(personalContacts);
        }

        // POST: Common/PersonalContacts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var personalContacts = await _context.PersonalContacts.FindAsync(id);
            _context.PersonalContacts.Remove(personalContacts);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PersonalContactsExists(int id)
        {
            return _context.PersonalContacts.Any(e => e.Id == id);
        }
    }
}
