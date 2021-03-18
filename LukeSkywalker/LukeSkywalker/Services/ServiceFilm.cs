using LukeSkywalker.Domain.Interface.Service;
using LukeSkywalker.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using LukeSkywalker.Domain.Interface.Repository;

namespace LukeSkywalker.Services
{
    public class ServiceFilm : IServiceFilm
    {
        private readonly IRepositoryFilm repository;

        public ServiceFilm(IRepositoryFilm _repository)
        {
            repository = _repository;
        }

        public void Create(Films entity)
        {
            repository.Create(entity);  
        }

        public void Delete(int id)
        {
            repository.Delete(id);
        }

        public ICollection<Films> Get()
        {
            return repository.Get();
        }

        public Films GetById(int id)
        {
            return repository.GetById(id);
        }

        public void Modify(Films entity)
        {
            repository.Modify(entity);
        }

        public ICollection<Films> List(string text)
        {
            return repository.List(text);
        }
    }
}
