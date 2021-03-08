using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LukeSkywalker.Services;
using LukeSkywalker.Models;
using LukeSkywalker.Domain.Interfaces.Services;
using LukeSkywalker.Database;
using Microsoft.EntityFrameworkCore;

namespace LukeSkywalker.Services
{
    public class SpecieService : IServiceEntity<Species>
    {
        private readonly ApplicationDBContext database;

        public SpecieService(ApplicationDBContext database)
        {
            this.database = database;
        }

        public void Create(Species entity)
        {
            if (entity.Id == 0)
            {
                database.Species.Add(entity);
            }
            database.SaveChanges();
        }

        public void Delete(int id)
        {
            Species entity = database.Species.First(registro => registro.Id == id);
            database.Species.Remove(entity);
            database.SaveChanges();
        }

        public ICollection<Species> Get()
        {
            return database.Species.ToList();
        }

        public Species GetById(int id)
        {
            return database.Species.First(registro => registro.Id == id);
        }

        public void Modify(Species entity)
        {
            var entityActual = database.Species.First(f => f.Id == entity.Id);
            database.Entry(entityActual).State = EntityState.Detached;
            database.Entry(entity).State = EntityState.Modified;
            database.SaveChanges();

        }
        public ICollection<Species> List(string text)
        {
            return database.Species.Where((registro) => registro.Name.Contains(text) || text == "").ToList(); 
        }
    }
}
