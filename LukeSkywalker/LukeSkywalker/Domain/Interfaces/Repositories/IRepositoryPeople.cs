using LukeSkywalker.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LukeSkywalker.Service.DTO;
using LukeSkywalker.Domain.Commands.Response;

namespace LukeSkywalker.Domain.Interface.Repository
{
    public interface IRepositoryPeople : IRepositoryEntity<People> 
    {
        ICollection<CreatePeopleResponse> Pesquisar(
            string film,
            string specie,
            string starship,
            string planet,
            string vehicle,
            string gender,
            string population);

        ICollection<CreatePeopleResponse> GetResponse();

    }
}
