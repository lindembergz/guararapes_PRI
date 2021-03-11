using LukeSkywalker.Domain.Models;
using LukeSkywalker.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;

namespace LukeSkywalker.App.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]

    public class StarShipController : ControllerBase
    {
        private readonly IServiceEntity<Starships> service;

        public StarShipController(IServiceEntity<Starships> _service)
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
                return Ok(entities);
            }
            catch (Exception e)
            {
                Response.StatusCode = 404;
                return new ObjectResult("deu ruim! Mensagem: " + e.Message);
            }

        }

        [EnableCors("AnotherPolicy")]
        [HttpGet("list/{name}")]
        public IActionResult List(string name)
        {
            try
            {
                var entities = service.List(name);

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
        //public async Task<FilmContainer> Get(int id)
        public IActionResult Get(int id)
        {
            try
            {
                Starships entityActual = service.GetById(id);
                if (entityActual != null)
                {
                    Response.StatusCode = 302;
                    return Ok(entityActual);
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
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Create([FromBody] Starships entity)
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
                    Response.StatusCode = 406;//	Not Acceptabl
                    return new ObjectResult("deu ruim! ");
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
        public IActionResult Modify([FromBody] Starships entity)
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
                    return new ObjectResult("deu ruim!");
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