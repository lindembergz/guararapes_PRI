using AutoMapper;
using LukeSkywalker.Domain.Commands.Requests;
using LukeSkywalker.Domain.Commands.Response;
using LukeSkywalker.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LukeSkywalker.App.Mappings
{
    public class DomaninToCommandRequest : Profile
    {

        public DomaninToCommandRequest()
        {
            CreateMap< People, RequestPeople>();

        }
    }
}
