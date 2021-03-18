using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using HanSOLO.Data;
using HanSOLO.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Cors;
using System.Text.Json;
using HanSOLO.Service;

namespace HanSOLO.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UsuariosController: ControllerBase
    {
        private readonly AutenticatorService service;

        public UsuariosController(AutenticatorService _service )
        {
            this.service  = _service;
        }

      
        [EnableCors("AnotherPolicy")]
        [HttpPost("Login")]       
        public IActionResult Login([FromBody] Usuario credenciais)
        { 
            try{
                Usuario usuario = service.Login(credenciais.Email);
                if(usuario != null || !usuario.Equals(credenciais.Senha))
                {
                    var Token = service.GenerateToken(usuario);
                    return Ok(Token);      
                }else{
                    Response.StatusCode = 401; // Não autorizado
                    return new ObjectResult("");
                }
            }catch(Exception e){
                    // Não existe nenhum usuário com este e-mail
                    Response.StatusCode = 401; // Não autorizado
                    return new ObjectResult("Deu ruim!");
            }   
        }
    }
}