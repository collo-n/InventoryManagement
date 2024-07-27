using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using InventoryManagementAPI.Data;
using Microsoft.AspNetCore.SpaServices.AngularCli;

namespace InventoryManagementAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            // Configure the DbContext to use SQL Server
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            // Add services for controllers
            services.AddControllers();

            // Add SPA static files support (for Angular)
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "InventoryManagementApp/dist"; // Path to your Angular app's build output
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles(); // This serves static files for your SPA

            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers(); // Map API controllers
            });

            // Configure SPA support
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "InventoryManagementApp"; // Path to your Angular app's source folder

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start"); // Run Angular CLI in development mode
                }
            });
        }
    }
}

