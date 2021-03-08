using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using LukeSkywalker.Models;
using LukeSkywalker.Database;
using LukeSkywalker.HATEOAS;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using LukeSkywalker.Domain.Interfaces.Services;
using LukeSkywalker.Services;

namespace LukeSkywalker.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]

    public class PeopleController : ControllerBase
    {
        private readonly IServiceEntity<People> service;
        public PeopleController(IServiceEntity<People> _service)
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
                return new ObjectResult("deu ruim!");
            }

        }

        [EnableCors("AnotherPolicy")]
        [HttpGet("{id}")]
        //public async Task<FilmContainer> Get(int id)
        public IActionResult Get(int id)
        {
            try
            {
                //Film film = await database.films.FindAsync( id );//(registro => registro.Id == id);
                People entityActual = service.GetById(id);
                if (entityActual != null)
                {
                    //FilmContainer filmHATEOAS = new FilmContainer(filmActual, HATEOAS.GetActions(filmActual.id.ToString()));
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
                return new ObjectResult("deu ruim!");
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
                return new ObjectResult("deu ruim!");
            }  
        }


        [EnableCors("AnotherPolicy")]
        [HttpGet("vwPeoplePlanets")]
        public IActionResult View()
        {
            try
            {
                string gender = Request.Query["gender"];
                string population = Request.Query["population"];

               var entities = ( (PeopleService)service ).GetPeoplePlanets(gender, population);       

                
                return Ok(entities);
            }
            catch (Exception e)
            {
                Response.StatusCode = 404;
                return new ObjectResult("deu ruim!");
            }
        }        

        [EnableCors("AnotherPolicy")]
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Create([FromBody] People entity)
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
                return new ObjectResult("deu ruim!");
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
                return new ObjectResult("deu ruim!");
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
                return new ObjectResult("deu ruim!");
            }
        }


    }
}