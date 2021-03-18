using LukeSkywalker.Infra.Database;
using LukeSkywalker.Domain.Entities;
using LukeSkywalker.Domain.Interface.Repository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LukeSkywalker.Services
{
    public class RepositoryPlanet : IRepositoryPlanet
    {
        private readonly ApplicationDBContext database;

        public RepositoryPlanet(ApplicationDBContext database)
        {
            this.database = database;
        }

        public void Create(Planets entity)
        {
            if (entity.Id == 0)
            {
                database.Planets.Add(entity);
                database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            Planets entity = database.Planets.First(registro => registro.Id == id);
            database.Planets.Remove(entity);
            database.SaveChanges();
        }

        public ICollection<Planets> Get()
        {
            return database.Planets.AsNoTracking().ToList();
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
            return database.Planets.AsNoTracking().Where((registro) => registro.Name.Contains(text) || text == "").ToList();
        }
    }
}
