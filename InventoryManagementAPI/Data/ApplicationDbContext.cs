using Microsoft.EntityFrameworkCore;
using InventoryManagementAPI.Models;
using System.Collections.Generic;

namespace InventoryManagementAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<InventoryItem> InventoryItems { get; set; }
    }
}
