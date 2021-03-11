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

namespace HanSOLO.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UsuariosController: ControllerBase
    {
        private readonly ApplicationDbContext _database;

        public UsuariosController(ApplicationDbContext database){
            this._database = database;
        }

        [EnableCors("AnotherPolicy")]
        [HttpPost("registro")]
        
        public IActionResult Registro([FromBody] Usuario usuario){
            // Verificar se as credenciais são válidas
            // Verificar se o e-mail já está cadastrado no banco
            // Encriptar a senha
            _database.Add(usuario);
            _database.SaveChanges();
            return Ok(new{msg="Usuário cadastrado com sucesso"});
        }

        [EnableCors("AnotherPolicy")]
        [HttpPost("Login")]
       
        public IActionResult Login([FromBody] Usuario credenciais){
            // Buscar um usuário por E-mail
            // Verificar se a senha está correta
            // Gerar um token JWT e retornar esse token para o usuário    
            try{
                Usuario usuario = _database.Usuarios.First(user => user.Email.Equals(credenciais.Email));
                if(usuario != null){
                    // Achou um usuário com cadastro válido
                    if(usuario.Senha.Equals(credenciais.Senha)){
                        // Usuário acertou a senha => Logou!!!                               
                        
                         string chaveDeSeguranca = "essa e minha senha secreta para autenticao";// Chave de segurança
                         var chaveSimetrica = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(chaveDeSeguranca));
                         var credenciaisDeAcesso = new SigningCredentials(chaveSimetrica,SecurityAlgorithms.HmacSha256Signature);

                        var claims = new List<Claim>();
                        claims.Add(new Claim("id",usuario.Id.ToString()));
                        claims.Add(new Claim("email",usuario.Email));
                        claims.Add(new Claim(ClaimTypes.Role,"Admin"));

                        var JWT = new JwtSecurityToken(
                            issuer: "riachuelo.com.br", //Quem está fornecendo o JWT para o usuário
                            expires: DateTime.Now.AddHours(1),
                            audience: "usuario_comum",
                            signingCredentials: credenciaisDeAcesso,
                            claims: claims
                        );

                        //

                        //return Ok(new JwtSecurityTokenHandler().WriteToken(JWT));
                        return Ok(JsonSerializer.Serialize(JWT));

                    }
                    else{
                        // Não existe nenhum usuário com este e-mail
                        Response.StatusCode = 401; // Não autorizado
                        return new ObjectResult("");
                    }
                }else{
                    // Não existe nenhum usuário com este e-mail
                    Response.StatusCode = 401; // Não autorizado
                    return new ObjectResult("");
                }
            }catch(Exception e){
                    // Não existe nenhum usuário com este e-mail
                    Response.StatusCode = 401; // Não autorizado
                    return new ObjectResult("");
            }   
        }
    }
}