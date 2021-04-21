using LukeSkywalker.Domain.Entities;
using LukeSkywalker.Domain.Interface.Service;
using LukeSkywalker.Domain.Interface.Repository;
using LukeSkywalker.Services.Helpers;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;


namespace LukeSkywalker.Services
{
    public class ServiceStarShip : IServiceStarship
    {
        private readonly IRepositoryStarship repository;

        public ServiceStarShip(IRepositoryStarship _repository)
        {
            repository = _repository;
        }

        public void Create(Starships entity)
        {
            repository.Create(entity);
        }

        public void Delete(int id)
        {
            repository.Delete(id);
        }

        public ICollection<Starships> Get()
        {
            return repository.Get();
        }

        public Starships GetById(int id)
        {
            return repository.GetById(id);
        }

        public void Modify(Starships entity)
        {
            repository.Modify(entity);
        }

        public ICollection<Starships> List(string text)
        {
            return repository.List(text);
        }
    }
}
