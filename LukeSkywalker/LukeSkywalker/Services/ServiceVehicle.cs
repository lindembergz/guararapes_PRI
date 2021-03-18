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
    public class ServiceVehicle : IServiceVehicle
    {
        private readonly IRepositoryVehicle repository;

        public ServiceVehicle(IRepositoryVehicle _repository)
        {
            repository = _repository;
        }

        public void Create(Vehicles entity)
        {
            repository.Create(entity);
        }

        public void Delete(int id)
        {
            repository.Delete(id);
        }

        public ICollection<Vehicles> Get()
        {
            return repository.Get();
        }

        public Vehicles GetById(int id)
        {
            return repository.GetById(id);
        }

        public void Modify(Vehicles entity)
        {
            repository.Modify(entity);
        }

        public ICollection<Vehicles> List(string text)
        {
            return repository.List(text);
        }
    }
}
