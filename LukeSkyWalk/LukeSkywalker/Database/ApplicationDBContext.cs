using Microsoft.EntityFrameworkCore;
using LukeSkywalker.Models;

namespace LukeSkywalker.Database
{
    public class ApplicationDBContext : DbContext
    {
        
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
        }

        public DbSet<Film> films { get; set; }
        public DbSet<People> pleople { get; set; }
        public DbSet<Planet> planets { get; set; }
        public DbSet<Specie> speeies { get; set; }
        public DbSet<Starship> starships { get; set; }
        public DbSet<Vehicle> vehicles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
           // optionsBuilder.UseLazyLoadingProxies();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}

/*
 *
 *  "host": "mysqlservidor.mysql.database.azure.com",
    "username": "servidor@mysqlservidor",
    "password": "982666@Lindemberg",
    "database": "starwars",
    "port":3306,
 */