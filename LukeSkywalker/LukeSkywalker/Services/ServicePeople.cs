using LukeSkywalker.Domain.Entities;
using LukeSkywalker.Domain.Interface.Service;
using LukeSkywalker.Domain.Interface.Repository;
using LukeSkywalker.Services.Helpers;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using LukeSkywalker.Domain.Commands.Requests;
using LukeSkywalker.Domain.Commands.Response;
using AutoMapper;

namespace LukeSkywalker.Services
{
    public class ServicePeople : IServicePeople//IServiceEntity<People>
    {
        private readonly IRepositoryPeople repository;
        private readonly IMapper mapper;

        public ServicePeople(IRepositoryPeople _repository, IMapper _mapper )
        {
            repository = _repository;
            mapper = _mapper;
        }
        public void Create(People entity)
        {
            repository.Create(entity);
        }

        public void CreateRequest(People entity)
        {
            repository.Create(entity);
        }
        public void CreateRequest(RequestPeople entity)
        {
            var mapperPeople = mapper.Map<People>(entity);
             /*
            People people = new People
            {
                 Name      = entity.Name,
                 BirthYear = entity.BirthYear,
                 EyeColor  = entity.EyeColor,
                 Gender    = entity.Gender,
                 HairColor = entity.HairColor,
                 Height    = entity.Height,
                 Mass      = entity.Mass,
                 SkinColor = entity.SkinColor
            };*/
            repository.Create(mapperPeople);
        }

        public void Delete(int id)
        {
            repository.Delete(id);
        }
        public ICollection<People> Get()
        {
            return repository.Get();
        }

        public ICollection<CreatePeopleResponse> GetResponse()
        {
            return repository.GetResponse();
        }
        public People GetById(int id)
        {
            return repository.GetById(id);
        }
        public void Modify(People entity)
        {
            repository.Modify(entity);
        }
        public ICollection<People> List(string text)
        {
            return repository.List(text);
        }
        public ICollection<CreatePeopleResponse> Pesquisar(
            string film,string specie, string starship, string planet, string vehicle, string gender,string population)
        {           

            var entities = repository.Pesquisar(film,  specie, starship, planet, vehicle, gender, population);

            return entities;
        }
       

    }
}
