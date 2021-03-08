using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using LukeSkywalker.Models;
using LukeSkywalker.Database;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using LukeSkywalker.Domain.Interfaces.Services;

namespace LukeSkywalker.NovaPasta
{
    public class PeopleRepository
    {
        private readonly ApplicationDBContext database;
    
        public PeopleRepository( ApplicationDBContext _database)
        {
            this.database = _database;
        }
    }
}
