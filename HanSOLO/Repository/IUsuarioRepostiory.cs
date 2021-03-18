using HanSOLO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HanSOLO.Interface.Repository
{
    public interface IUsuarioRepository
    {
        public Usuario Login( string email);
    }
}
