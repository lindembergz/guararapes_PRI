using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LukeSkywalker.Domain.Interfaces.Services
{
    public interface IServiceEntity<T>
    {
        ICollection<T> Get();
        T GetById(int id);
        void Create(T entity);
        void Modify(T entity);
        void Delete(int id);
        ICollection<T> List(string text);
    }
}
