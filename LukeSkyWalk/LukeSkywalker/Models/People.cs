using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LukeSkywalker.Models
{
    public class People
    {
         public int id { get;  set; }
         public string name { get;  set;  } //-- The name of this person.
         public string birth_year { get; set;  } //-- The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
         public string eye_color { get;  set;  }//-- The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
         public string gender { get;  set;  } //-- The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
         public string hair_color { get;  set;  } //-- The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
         public string height { get;  set;  } //-- The height of the person in centimeters.
         public string mass { get;  set;  } //-- The mass of the person in kilograms.
         public string skin_color { get; set;  } //-- The skin color of this person.
         public string homeworld { get; set;  } //-- The URL of a planet resource, a planet that this person was born on or inhabits.
         public List<Film> films { get; set; }//-- An array of film resource URLs that this person has been in.    
         public List<Specie> species { get;  set; }//  An array of species resource URLs that this person belongs to.
         public List<Starship> starships { get;  set; }//-- An array of starship resource URLs that this person has piloted.
         public List<Vehicle> vehicles { get;  set; }// An array of vehicle resource URLs that are in this film.
         public string url { get;  set;  } //-- the hypermedia URL of this resource.
         public string created { get; set;  } //-- the ISO 8601 date format of the time that this resource was created.
         public string edited { get; set;  } //-- the ISO 8601 date format of the time that this resource was edited.
    }
}
