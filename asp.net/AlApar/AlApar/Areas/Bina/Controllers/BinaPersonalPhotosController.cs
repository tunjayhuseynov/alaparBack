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
    public class BinaPersonalPhotosController : Controller
    {
        private readonly alAparContext _context;

        public BinaPersonalPhotosController()
        {
            _context = new alAparContext();
        }

        // GET: Bina/BinaPersonalPhotos
        public async Task<IActionResult> Index()
        {
            var alAparContext = _context.BinaPersonalPhotos.Include(b => b.Ad);
            return View(await alAparContext.ToListAsync());
        }

        // GET: Bina/BinaPersonalPhotos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaPersonalPhotos = await _context.BinaPersonalPhotos
                .Include(b => b.Ad)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaPersonalPhotos == null)
            {
                return NotFound();
            }

            return View(binaPersonalPhotos);
        }

        // GET: Bina/BinaPersonalPhotos/Create
        public IActionResult Create()
        {
            ViewData["AdId"] = new SelectList(_context.BinaAdsPersonal, "Id", "Id");
            return View();
        }

        // POST: Bina/BinaPersonalPhotos/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,ImagePath,AdId")] BinaPersonalPhotos binaPersonalPhotos)
        {
            if (ModelState.IsValid)
            {
                _context.Add(binaPersonalPhotos);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["AdId"] = new SelectList(_context.BinaAdsPersonal, "Id", "Id", binaPersonalPhotos.AdId);
            return View(binaPersonalPhotos);
        }

        // GET: Bina/BinaPersonalPhotos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaPersonalPhotos = await _context.BinaPersonalPhotos.FindAsync(id);
            if (binaPersonalPhotos == null)
            {
                return NotFound();
            }
            ViewData["AdId"] = new SelectList(_context.BinaAdsPersonal, "Id", "Id", binaPersonalPhotos.AdId);
            return View(binaPersonalPhotos);
        }

        // POST: Bina/BinaPersonalPhotos/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,ImagePath,AdId")] BinaPersonalPhotos binaPersonalPhotos)
        {
            if (id != binaPersonalPhotos.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(binaPersonalPhotos);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BinaPersonalPhotosExists(binaPersonalPhotos.Id))
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
            ViewData["AdId"] = new SelectList(_context.BinaAdsPersonal, "Id", "Id", binaPersonalPhotos.AdId);
            return View(binaPersonalPhotos);
        }

        // GET: Bina/BinaPersonalPhotos/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var binaPersonalPhotos = await _context.BinaPersonalPhotos
                .Include(b => b.Ad)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (binaPersonalPhotos == null)
            {
                return NotFound();
            }

            return View(binaPersonalPhotos);
        }

        // POST: Bina/BinaPersonalPhotos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var binaPersonalPhotos = await _context.BinaPersonalPhotos.FindAsync(id);
            _context.BinaPersonalPhotos.Remove(binaPersonalPhotos);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BinaPersonalPhotosExists(int id)
        {
            return _context.BinaPersonalPhotos.Any(e => e.Id == id);
        }
    }
}
