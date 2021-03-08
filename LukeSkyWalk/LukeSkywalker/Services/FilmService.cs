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
    public class FilmService : IServiceEntity<Films>
    {
        private readonly ApplicationDBContext database;

        public FilmService(ApplicationDBContext database)
        {
            this.database = database;
        }

        public void Create(Films entity)
        {
            if (entity.Id == 0)
            {
                database.Films.Add(entity);
            }
            database.SaveChanges();
        }

        public void Delete(int id)
        {
            Films entity = database.Films.First(registro => registro.Id == id);
            database.Films.Remove(entity);
            database.SaveChanges();
        }

        public ICollection<Films> Get()
        {
            return database.Films.ToList();
        }

        public Films GetById(int id)
        {
            return database.Films.First(registro => registro.Id == id);
        }

        public void Modify(Films entity)
        {
            var entityActual = database.Films.First(f => f.Id == entity.Id);
            database.Entry(entityActual).State = EntityState.Detached;
            database.Entry(entity).State = EntityState.Modified;
            database.SaveChanges();

        }

        public ICollection<Films> List(string text)
        { 
            return database.Films.Where((registro) => registro.Title.Contains(text) || text == "").ToList();
        }    
    }
}
