using System;
namespace InventoryManagementAPI.Models
{
	public class InventoryItem
	{
		public int ItemID { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string Quantity { get; set; }
		public decimal Price { get; set; }
	}
}

