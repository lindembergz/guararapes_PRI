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
    public class PlanetService : IServiceEntity<Planets>
    {
        private readonly ApplicationDBContext database;

        public PlanetService(ApplicationDBContext database)
        {
            this.database = database;
        }

        public void Create(Planets entity)
        {
            if (entity.Id == 0)
            {
                database.Planets.Add(entity);
            }
            database.SaveChanges();
        }

        public void Delete(int id)
        {
            Planets entity = database.Planets.First(registro => registro.Id == id);
            database.Planets.Remove(entity);
            database.SaveChanges();
        }

        public ICollection<Planets> Get()
        {
            return database.Planets.ToList();
        }

        public Planets GetById(int id)
        {
            return database.Planets.First(registro => registro.Id == id);
        }

        public void Modify(Planets entity)
        {
            var entityActual = database.Planets.First(f => f.Id == entity.Id);
            database.Entry(entityActual).State = EntityState.Detached;
            database.Entry(entity).State = EntityState.Modified;
            database.SaveChanges();

        }

        public ICollection<Planets> List(string text)
        {
            return  database.Planets.Where((registro) => registro.Name.Contains(text) || text == "").ToList(); 
        }
    }
}
