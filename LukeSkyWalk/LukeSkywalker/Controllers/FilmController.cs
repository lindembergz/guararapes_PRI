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

namespace LukeSkywalker.Controllers
{
    [Route("api/v1/[controller]")] 
    [ApiController]
    
    public class FilmController : ControllerBase
    {
        private readonly ApplicationDBContext database;
        private HATEOAS.HATEOAS HATEOAS;
        public FilmController(ApplicationDBContext database)
        {
            this.database = database;
            HATEOAS = new HATEOAS.HATEOAS("localhost:5000/api/v1/film");
            HATEOAS.AddAction("GET_INFO", "GET");
            HATEOAS.AddAction("DELETE", "DELETE");
            HATEOAS.AddAction("CREATE", "POST");
            HATEOAS.AddAction("MODIFY", "PUT");
        }

        [EnableCors("AnotherPolicy")]
        [HttpGet]       
        public IActionResult Get()
        {
            try
            {
                var Films = database.films.ToList();
                return Ok(Films);
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
                Film filmActual =  database.films.First(registro => registro.id == id);
                if (filmActual != null)
                {
                   //FilmContainer filmHATEOAS = new FilmContainer(filmActual, HATEOAS.GetActions(filmActual.id.ToString()));
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

       /* [EnableCors("AnotherPolicy")]
        [HttpGet("{title}")]
        //public async Task<FilmContainer> Get(int id)
        public async Task<IActionResult> findByTitle(string title)
        {
            try
            {
                //Film film = await database.films.FindAsync( id );//(registro => registro.Id == id);
                Film filmActual = await database.films.FirstAsync<Film>(registro => registro.title == title);
                if (filmActual != null)
                {
                    //FilmContainer filmHATEOAS = new FilmContainer(filmActual, HATEOAS.GetActions(filmActual.id.ToString()));
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
        } */

        


        [EnableCors("AnotherPolicy")]
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Create([FromBody] Film film)
        {
            if (ModelState.IsValid)
            {                
                if (film.id == 0)
                {
                    database.films.Add(film);
                }                   
                database.SaveChanges();
                Response.StatusCode = 201;//Created
                return Ok(new { msg = "Film criado com sucesso!" });
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
        public IActionResult Modify([FromBody] Film film)
        {
            if (ModelState.IsValid)
            {
                var filmActual = database.films.First(f => f.id == film.id);
                if (filmActual != null)
                {
                    // filmActual.title = film.title;
                    // database.Update(film);
                    database.Entry(filmActual).State = EntityState.Detached;
                    database.Entry(film).State = EntityState.Modified;  
                    database.SaveChanges();
                    return Ok(new { msg = "Film alterado com sucesso!" });
                }
                else
                {
                    Response.StatusCode = 204;//No Content
                    return null;
                }
            }
            else
            {
                Response.StatusCode = 304; //	Not Modified
                return new ObjectResult("deu ruim!");
            }
        }
        [EnableCors("AnotherPolicy")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Film film = database.films.First(registro => registro.id == id);
                if (film != null)
                {
                    database.films.Remove(film);
                    database.SaveChanges();
                    return Ok();
                } else
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

        public class FilmContainer
        {
            public Film film { get; private set; }
            public Link[] links { get; private  set; }

            public FilmContainer(Film _film, Link[] _links)
            {
                film  = _film;

                links = _links;
            }
        }

    }
}