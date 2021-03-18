using LukeSkywalker.Domain.Commands.Requests;
using LukeSkywalker.Domain.Entities;
using LukeSkywalker.Domain.Interface.Service;
using LukeSkywalker.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;

namespace LukeSkywalker.App.Controllers
{
    [Route("api/v1/People")]
    [ApiController]

    public class ControllerPeople : ControllerBase
    {
        private readonly IServicePeople service;
        public ControllerPeople(IServicePeople _service)
        {
            this.service = _service;
        }

        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var entities = service.GetResponse();
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
                People entityActual = service.GetById(id);
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
        [HttpGet("Pesquisar")]
        public IActionResult View()
        {

            try
            {
                string film = Request.Query["film"];
                string specie = Request.Query["specie"];
                string planet = Request.Query["planet"];
                string starship = Request.Query["starship"];
                string vehicle = Request.Query["vehicle"];
                string gender = Request.Query["gender"];
                string population = Request.Query["population"];

                var entities = service.Pesquisar(
                    film, specie, planet, starship, vehicle, gender, population);

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
        public IActionResult Create([FromBody] RequestPeople entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (entity.Id == 0)
                    {
                        service.CreateRequest(entity);
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
                    return new ObjectResult("deu ruim!  ");
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
        public IActionResult Modify([FromBody] People entity)
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