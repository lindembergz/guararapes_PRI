using LukeSkywalker.Domain.Entities;
using LukeSkywalker.Domain.Interface.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LukeSkywalker.Domain.Commands.Requests;
using LukeSkywalker.Domain.Commands.Response;

namespace LukeSkywalker.Domain.Interface.Service
{
    public interface IServicePeople : IServiceEntity<People> 
    {

       public ICollection<CreatePeopleResponse> Pesquisar( string film,
                                      string specie,
                                      string starship,
                                      string planet,
                                      string vehicle,
                                      string gender,
                                      string population);

       public void CreateRequest(RequestPeople entity);

        ICollection<CreatePeopleResponse> GetResponse();
    }
}
