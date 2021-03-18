using LukeSkywalker.Infra.Database;

using LukeSkywalker.Domain.Entities;
using LukeSkywalker.Domain.Interface.Repository;
using LukeSkywalker.Service.DTO;
using LukeSkywalker.Services.Helpers;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using LukeSkywalker.Domain.Commands.Response;
using Confluent.Kafka;

namespace LukeSkywalker.Services
{
    public class RepositoryPeople : IRepositoryPeople
    {
        private ApplicationDBContext database;

        public RepositoryPeople(ApplicationDBContext database)
        {
            this.database = database;
        }

        public  void Create(People entity)
        {
            if (entity.Id == 0)
            {
                 database.People.Add(entity);
                database.SaveChanges();
            }
                     
        }

        public void Delete(int id)
        {
            People entity = database.People.First(registro => registro.Id == id);
            database.People.Remove(entity);
            database.SaveChanges();
        }

        public ICollection<People> Get()
        {
            return database.People.AsNoTracking().Include(p => p.PeopleFilmsFilms).AsNoTracking().ToList();
        }

        public ICollection<CreatePeopleResponse> GetResponse()
        {        
           return database.PeopleResponse.AsNoTracking().ToList();
        }   

        public People GetById(int id)
        {
            return database.
                People.
                Include(p => p.FilmsPeoplePeople).
                First(registro => registro.Id == id);
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
            return database.People.AsNoTracking().Where((registro) => registro.Name.Contains(text) || text == "").ToList();
        }

        private string CreateCondition(
            string film,
            string specie,
            string starship,
            string planet,
            string vehicle,
            string gender,
            string population)
        {
            var whereGender = "";
            var whereSpecie = "";
            var wherefilm = "";
            var wherestarship = "";
            var whereplanet = "";
            var wherevehicle = "";


            if (gender != "" && gender != null)
            {
                whereGender = $"Gender = '{gender}' and ";
            }

            if (specie != "" && specie != null)
            {
                whereSpecie = this.GetConditionSpecie(specie);
            }
            if (starship != "" && starship != null)
            {
                wherestarship = this.GetConditionSpecie(starship);
            }
            if ((planet != "" && planet != null) || (population != "" && population != null))
            {
                whereplanet = this.GetConditionPlanet(planet, population);
            }
            if (vehicle != "" && vehicle != null)
            {
                wherevehicle = whereplanet = this.GetConditionVehicle(vehicle);
            }

            if (film != "" && film != null)
            {
                wherefilm = this.GetConditionFilm(film);
            }
            var conditions = whereGender + whereSpecie + wherestarship + whereplanet + wherevehicle + wherefilm;

            if (conditions != "")
            {
                conditions = $"where {conditions} people.Id is not null";
            }

            return conditions;

        }

        public ICollection<CreatePeopleResponse> Pesquisar(
            string film,
            string specie,
            string starship,
            string planet,
            string vehicle,
            string gender,
            string population)
        {         
            var conditions = this.CreateCondition(film, specie, starship, planet, vehicle, gender, population);            

            var entities = database.PeopleResponse.FromSqlRaw($"Select Id, Name From people " + conditions).AsNoTracking().ToList();

            return entities;
        }

    }
}
