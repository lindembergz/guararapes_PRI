using System.Collections.Generic;

namespace LukeSkywalker.Domain.Services.Interfaces
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
