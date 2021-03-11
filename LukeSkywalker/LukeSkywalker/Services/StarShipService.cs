using LukeSkywalker.Database;
using LukeSkywalker.Domain.Models;
using LukeSkywalker.Domain.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LukeSkywalker.Services
{
    public class StarShipService : IServiceEntity<Starships>
    {
        private readonly ApplicationDBContext database;

        public StarShipService(ApplicationDBContext database)
        {
            this.database = database;
        }

        public void Create(Starships entity)
        {
            if (entity.Id == 0)
            {
                database.Starships.Add(entity);
            }
            database.SaveChanges();
        }

        public void Delete(int id)
        {
            Starships entity = database.Starships.First(registro => registro.Id == id);
            database.Starships.Remove(entity);
            database.SaveChanges();
        }

        public ICollection<Starships> Get()
        {
            return database.Starships.AsNoTracking().ToList();
        }

        public Starships GetById(int id)
        {
            return database.Starships.First(registro => registro.Id == id);
        }

        public void Modify(Starships entity)
        {
            var entityActual = database.Starships.First(f => f.Id == entity.Id);
            database.Entry(entityActual).State = EntityState.Detached;
            database.Entry(entity).State = EntityState.Modified;
            database.SaveChanges();

        }

        public ICollection<Starships> List(string text)
        {
            return database.Starships.AsNoTracking().Where((registro) => registro.Name.Contains(text) || text == "").ToList();
        }
    }
}
