using LukeSkywalker.Infra.Database;
using LukeSkywalker.Domain.Entities;
using LukeSkywalker.Domain.Interface.Repository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LukeSkywalker.Services
{
    public class RepositoryVehicle : IRepositoryVehicle
    {
        private readonly ApplicationDBContext database;

        public RepositoryVehicle(ApplicationDBContext database)
        {
            this.database = database;
        }

        public void Create(Vehicles entity)
        {
            if (entity.Id == 0)
            {
                database.Vehicles.Add(entity);
                database.SaveChanges();
            }            
        }

        public void Delete(int id)
        {
            Vehicles entity = database.Vehicles.First(registro => registro.Id == id);
            database.Vehicles.Remove(entity);
            database.SaveChanges();
        }

        public ICollection<Vehicles> Get()
        {
            return database.Vehicles.AsNoTracking().ToList();
        }

        public Vehicles GetById(int id)
        {
            return database.Vehicles.First(registro => registro.Id == id);
        }

        public void Modify(Vehicles entity)
        {
            var entityActual = database.Vehicles.First(f => f.Id == entity.Id);
            database.Entry(entityActual).State = EntityState.Detached;
            database.Entry(entity).State = EntityState.Modified;
            database.SaveChanges();

        }

        public ICollection<Vehicles> List(string text)
        {
            return database.Vehicles.AsNoTracking().Where((registro) => registro.Name.Contains(text) || text == "").ToList();
        }
    }
}
