using LukeSkywalker.Domain.Entities;
using LukeSkywalker.Domain.Interface.Service;
using LukeSkywalker.Domain.Interface.Repository;
using LukeSkywalker.Service.DTO;
using LukeSkywalker.Services.Helpers;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;



namespace LukeSkywalker.Services
{
    public class ServicePlanet : IServicePlanet
    {
        private readonly IRepositoryPlanet repository;

        public ServicePlanet(IRepositoryPlanet _repository)
        {
            repository = _repository;
        }

        public void Create(Planets entity)
        {
            repository.Create(entity);
        }

        public void Delete(int id)
        {
            repository.Delete(id);
        }

        public ICollection<Planets> Get()
        {
            return repository.Get();
        }

        public Planets GetById(int id)
        {
            return repository.GetById(id);
        }

        public void Modify(Planets entity)
        {
            repository.Modify(entity);
        }

        public ICollection<Planets> List(string text)
        {
            return repository.List(text);
        }
    }
}
