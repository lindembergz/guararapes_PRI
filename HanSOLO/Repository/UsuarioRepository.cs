using HanSOLO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HanSOLO.Data;
using HanSOLO.Interface.Repository;


namespace HanSOLO.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    { 

        private readonly ApplicationDbContext database;
        public UsuarioRepository (ApplicationDbContext _database)
        {
            this.database = _database;
        }
        public Usuario Login(string email)
        {
           Usuario usuario = database.Usuarios.First(user => user.Email.Equals(email));
           return usuario;
        }
    }
}
