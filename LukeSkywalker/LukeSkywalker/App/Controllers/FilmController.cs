using System;
using Microsoft.AspNetCore.Mvc;
using LukeSkywalker.Models;
using Microsoft.AspNetCore.Cors;
using LukeSkywalker.Domain.Interfaces.Services;

namespace LukeSkywalker.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]

    public class FilmController : ControllerBase
    {        
        private readonly IServiceEntity<Films> service;
        //private HATEOAS.HATEOAS HATEOAS;
        public FilmController( IServiceEntity<Films> _service)
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
        public IActionResult Get(int id)
        {
            try
            {
                var filmActual = service.GetById(id);
                if (filmActual != null)
                {
                    Response.StatusCode = 302;
                    return Ok(filmActual);
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
                return new ObjectResult("deu ruim!");
            }
        }

        [EnableCors("AnotherPolicy")]
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Create([FromBody] Films entity)
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