using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LukeSkywalker.Services;
using LukeSkywalker.Models;
using LukeSkywalker.Domain.Interfaces.Services;
using LukeSkywalker.Database;
using Microsoft.EntityFrameworkCore;
using LukeSkywalker.viewmodels;


namespace LukeSkywalker.Services
{
    public class PeopleService : IServiceEntity<People>
    {
        private readonly ApplicationDBContext database;

        public PeopleService(ApplicationDBContext database)
        {
            this.database = database;
        }

        public void Create(People entity)
        {
            if (entity.Id == 0)
            {
                database.People.Add(entity);
            }
            database.SaveChanges();
        }

        public void Delete(int id)
        {
            People entity = database.People.First(registro => registro.Id == id);
            database.People.Remove(entity);
            database.SaveChanges();
        }

        public ICollection<People> Get()
        {
            return database.People.ToList();
        }

        public People GetById(int id)
        {
            return database.People.First(registro => registro.Id == id);
        }

        public void Modify(People entity)
        {
            var entityActual = database.People.First(f => f.Id == entity.Id);
            database.Entry(entityActual).State = EntityState.Detached;
            database.Entry(entity).State = EntityState.Modified;
            database.SaveChanges();

        }

        public ICollection<People> List(string text)
        {
            return database.People.Where((registro) => registro.Name.Contains(text) || text == "").ToList();
        }

        public List<vwPeoplePlanets> GetPeoplePlanets(string gender, string population)
        {
            // MELHOR ESTÁ NO REPOSITORIO DA ENTIDADE
            var entities =  database.vwPeoplePlanets.FromSqlRaw(
                           $"select Id, Name, Gender, Population from vwPeoplePlanets " +
                           $"where Gender= '{gender}' and Population> {population}").ToList();
            return entities;
        }
    }
}
