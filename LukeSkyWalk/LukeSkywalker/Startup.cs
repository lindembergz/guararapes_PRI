using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
using Microsoft.EntityFrameworkCore;
using LukeSkywalker.Database;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using LukeSkywalker.Domain.Interfaces.Services;
using LukeSkywalker.Services;
using LukeSkywalker.Models;




namespace LukeSkywalker
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            

            //services.AddDbContext<ApplicationDbContext>(options => options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));

            /*services.AddDbContextFactory<ApplicationDBContext>(
                dbContextOptions => dbContextOptions.UseMySql("server=localhost;port=3306;database=swapi;uid=root;password=1234",
                    new MySqlServerVersion(new Version(8, 0, 21)),
                       mySqlOptions => mySqlOptions
                           .CharSetBehavior(CharSetBehavior.NeverAppend))
                   .EnableSensitiveDataLogging()
                   .EnableDetailedErrors()
                );*/

            services.AddControllers();

              services.AddDbContextPool<ApplicationDBContext>(
                 dbContextOptions => dbContextOptions
                 //.UseMySql( "server=mysqlservidor.mysql.database.azure.com;port=3306;database=starwars;uid=servidor@mysqlservidor;password=982666@Lindemberg",
                 .UseMySql("server=localhost;port=3306;database=swapi;uid=root;password=1234",

                      new MySqlServerVersion(new Version(8, 0, 21)), 
                         mySqlOptions => mySqlOptions
                             .CharSetBehavior(CharSetBehavior.NeverAppend))
                     .EnableSensitiveDataLogging()
                     .EnableDetailedErrors()
             );

            services.AddMvc();
            //AddSingleton
            //AddScoped
            services.AddTransient<IServiceEntity<Films>, FilmService>();
            services.AddTransient<IServiceEntity<People>, PeopleService>();
            services.AddTransient<IServiceEntity<Species>, SpecieService>();
            services.AddTransient<IServiceEntity<Planets>, PlanetService>();
            services.AddTransient<IServiceEntity<Vehicles>, VehicleService>();
            services.AddTransient<IServiceEntity<Starships>, StarShipService>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "LukeSkywalker", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "LukeSkywalker v1"));
            }
            //Fonte: https://docs.microsoft.com/pt-br/aspnet/core/security/cors?view=aspnetcore-5.0#attr
            app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

            app.UseHttpsRedirection();



            app.UseRouting();
            app.UseCors();

            //app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
