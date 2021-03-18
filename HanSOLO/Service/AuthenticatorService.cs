using HanSOLO.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HanSOLO.Interface.Repository;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using HanSOLO.Models;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Text.Json;
using HanSOLO.Repository;
using HanSOLO.Core;

namespace HanSOLO.Service
{
    public class AutenticatorService
    {
        private TokenJWT jwt;
        private TokenIdentity identity;
        private readonly IUsuarioRepository usuarioRepository;

        public AutenticatorService(
               IUsuarioRepository _usuarioRepository            
            )
        {            
            this.usuarioRepository = _usuarioRepository;
        }
        public Usuario Login(string email)
        {
            return this.usuarioRepository.Login(email);
        }
        private string GenerateTokenJWT(string Id, string Email)
        {
            TokenJWT jwt = new TokenJWT();
            return jwt.GetToken(Id, Email);
        }
        private string GenerateTokenIdentity(string Id, string Email)
        {
            TokenIdentity identity = new TokenIdentity();
            return identity.GetToken();
        }
        public string GenerateToken(Usuario usuario)
        { 
            var Token = this.GenerateTokenJWT(usuario.Id.ToString(), usuario.Email);
            return Token;
        }
    }
}
