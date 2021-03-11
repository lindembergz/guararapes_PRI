using LukeSkywalker.Domain.Models;
using LukeSkywalker.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json;

namespace LukeSkywalker.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]

    public class FilmController : ControllerBase
    {

        private readonly IServiceEntity<Films> service;

        public FilmController(IServiceEntity<Films> _service)
        {
            this.service = _service;
        }

        [EnableCors("AnotherPolicy")]
        [HttpGet]

        public IActionResult Get()
        {
            try
            {
                var entities = service.Get();
                //return Ok(JsonSerializer.Serialize(entities));
                return Ok(entities);
            }
            catch (Exception e)
            {
                Response.StatusCode = 404;
                return new ObjectResult("deu ruim! Mensagem: " + e.Message);
            }
        }

        [EnableCors("AnotherPolicy")]
        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            try
            {
                var filmActual = service.GetById(id);
                if (filmActual != null)
                {
                    Response.StatusCode = 302;
                    return Ok(filmActual);
                    //return Ok(JsonSerializer.Serialize( filmActual));
                }
                else
                {
                    Response.StatusCode = 204;//No Content
                    return null;
                }
            }
            catch (Exception e)
            {
                Response.StatusCode = 404;
                return new ObjectResult("deu ruim! Mensagem: " + e.Message);
            }
        }

        [EnableCors("AnotherPolicy")]
        [HttpGet("list/{title}")]
        public IActionResult List(string title)
        {
            try
            {
                var entities = service.List(title);
                return Ok(entities);
            }
            catch (Exception e)
            {
                Response.StatusCode = 404;
                return new ObjectResult("deu ruim! Mensagem: " + e.Message);
            }
        }

        [EnableCors("AnotherPolicy")]
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Create([FromBody] Films entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (entity.Id == 0)
                    {
                        service.Create(entity);
                        Response.StatusCode = 201;//Created
                        return Ok(new { msg = "criado com sucesso!" });
                    }
                    else
                    {
                        Response.StatusCode = 404;//	Not Acceptable
                        return null;
                    }
                }
                else
                {
                    Response.StatusCode = 406;//	Not Acceptable
                    return new ObjectResult("deu ruim! Mensagem: ");
                }
            }
            catch (Exception e)
            {
                Response.StatusCode = 406;//	Not Acceptable
                return new ObjectResult("deu ruim! Mensagem: " + e.Message);
            }
        }

        //[AllowAnonymous]
        [EnableCors("AnotherPolicy")]
        [HttpPut]
        public IActionResult Modify([FromBody] Films entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    service.Modify(entity);
                    return Ok(new { msg = "alterado com sucesso!" });
                }
                else
                {
                    Response.StatusCode = 304; //	Not Modified
                    return new ObjectResult("deu ruim! ");
                }
            }
            catch (Exception e)
            {
                Response.StatusCode = 406;//	Not Acceptable
                return new ObjectResult("deu ruim! Mensagem: " + e.Message);
            }
        }

        [EnableCors("AnotherPolicy")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                service.Delete(id);
                return Ok();
            }
            catch (Exception e)
            {
                Response.StatusCode = 404;
                return new ObjectResult("deu ruim! Mensagem: " + e.Message);
            }
        }



    }
}