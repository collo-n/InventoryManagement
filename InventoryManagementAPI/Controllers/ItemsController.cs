using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InventoryManagementAPI.Data;
using InventoryManagementAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InventoryManagementAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ItemsController : ControllerBase
	{
		private readonly ApplicationDbContext _context;
		public ItemsController(ApplicationDbContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<InventoryItem>>> GetItems()
		{
			return await _context.InventoryItems.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<InventoryItem>> GetItem(int id)
		{
			var item = await _context.InventoryItems.FindAsync(id);
			if (item == null)
			{
				return NotFound();
			}
			return item;
		}

		[HttpPost]
        public async Task<IActionResult> PutItem(int id, InventoryItem item)
        {
			if (id != item.ItemID)
			{
				return BadRequest();
			}

			_context.Entry(item).State = EntityState.Modified;
			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!ItemExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}
			return NoContent();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteItem(int id)
		{
			var item = await _context.InventoryItems.FindAsync(id);
			if (item == null)
			{
				return NotFound();
			}

			_context.InventoryItems.Remove(item);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool ItemExists(int id)
		{
			return _context.InventoryItems.Any(e => e.ItemID == id);
		}
	}
}

