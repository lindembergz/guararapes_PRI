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
    public class ServiceSpecie : IServiceSpecie
    {
        private readonly IRepositorySpecie repository;

        public ServiceSpecie(IRepositorySpecie _repository)
        {
            repository = _repository;
        }

        public void Create(Species entity)
        {
            repository.Create(entity);
        }

        public void Delete(int id)
        {
            repository.Delete(id);
        }

        public ICollection<Species> Get()
        {
            return repository.Get();
        }

        public Species GetById(int id)
        {
            return repository.GetById(id);
        }

        public void Modify(Species entity)
        {
            repository.Modify(entity);
        }

        public ICollection<Species> List(string text)
        {
            return repository.List(text);
        }
    }
}
