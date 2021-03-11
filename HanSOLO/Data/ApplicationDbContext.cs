using System;
using System.Collections.Generic;
using System.Text;
using HanSOLO.Models;
using Microsoft.EntityFrameworkCore;

namespace HanSOLO.Data
{
    public class ApplicationDbContext : DbContext
    {

        public DbSet<Usuario> Usuarios {get; set;}

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
        }

    }
}