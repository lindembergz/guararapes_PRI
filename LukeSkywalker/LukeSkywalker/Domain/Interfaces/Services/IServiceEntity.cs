using System.Collections.Generic;

namespace LukeSkywalker.Domain.Interface.Service
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
