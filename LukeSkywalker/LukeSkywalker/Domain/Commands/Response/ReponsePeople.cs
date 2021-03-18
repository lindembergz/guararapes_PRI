using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LukeSkywalker.Domain.Commands.Response
{
     public class CreatePeopleResponse
    {
        //CQRS - Comands Query Responsibility Segregation
        public int id { get; set; }
        [Column("name")]
        public string name { get;  set; }
    }
}
