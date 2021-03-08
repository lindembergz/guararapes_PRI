using System;
using System.Collections.Generic;
using System.Linq;
using LukeSkywalker.Models;
using LukeSkywalker.Domain.Interfaces.Services;
using LukeSkywalker.Database;
using Microsoft.EntityFrameworkCore;

namespace LukeSkywalker.Services
{
    public class VehicleService : IServiceEntity<Vehicles>
    {
        private readonly ApplicationDBContext database;

        public VehicleService(ApplicationDBContext database)
        {
            this.database = database;
        }

        public void Create(Vehicles entity)
        {
            if (entity.Id == 0)
            {
                database.Vehicles.Add(entity);
            }
            database.SaveChanges();
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
