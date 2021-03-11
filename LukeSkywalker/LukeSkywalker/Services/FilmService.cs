using LukeSkywalker.Database;
using LukeSkywalker.Domain.Models;
using LukeSkywalker.Domain.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace LukeSkywalker.Services
{
    public class FilmService : IServiceEntity<Films>
    {
        private readonly ApplicationDBContext database;

        public FilmService(ApplicationDBContext _database)
        {
            database = _database;
        }


        public void Create(Films entity)
        {
            if (entity.Id == 0)
            {
                //Films e = new Films();
                // CopiaPropriedades(entity, e);

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
            return database.Films.AsNoTracking().ToList();
        }

        public Films GetById(int id)
        {

            return database.Films.
              //Include("FilmsPeoplePeople.People").
              Include(fpp => fpp.FilmsPeoplePeople).
                   ThenInclude(pp => pp.People).First(registro => registro.Id == id);
            /*Include(fpl=>fpl.FilmsPlanetsPlanets).
                 ThenInclude(pl => pl.Planets).
            Include(fpl => fpl.FilmsSpeciesSpecies).
                 ThenInclude(pl => pl.Species).                   
            //Include("FilmsSpeciesSpecies.Species").
            Include(fpl => fpl.FilmsStarshipsStarships).
                 ThenInclude(pl => pl.Starships).
            //Include("FilmsStarshipsStarships.Starships").
            Include(fpl => fpl.FilmsVehiclesVehicles).
                 ThenInclude(pl => pl.Vehicles).
            //Include("FilmsVehiclesVehicles.Vehicles").*/

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
            return database.Films.AsNoTracking().Where((registro) => registro.Title.Contains(text) || text == "").ToList();
        }
    }
}
