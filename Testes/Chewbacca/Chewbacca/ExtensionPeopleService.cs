using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LukeSkywalker.Services.Helpers
{
    public static class ExtensionPeopleService
    {

        public static string GetConditionSpecie ( this PeopleService input, string name)
        {
            
            return $"Id IN(Select distinct peopleId From people_species_species pss inner join species s on " +
                               $"s.Id = pss.speciesId where s.name = '{name}' ) and ";
        }

        public static string GetConditionPlanet(this PeopleService input, string name, string population)
        {

            return (name != "" && population != "") ?
                               $"Id IN(Select distinct  peopleId From people_planets_planets ppp inner join planets pl on " +
                               $"pl.Id = ppp.planetsId where (pl.name = '{name}' and Population> {population})) and " :
                               (name != "" && population == "") ?
                               $"Id IN(Select distinct  peopleId From people_planets_planets ppp inner join planets pl on " +
                               $"pl.Id = ppp.planetsId where (pl.name = '{name}')) and " :
                               (name == "" && population != "") ?
                               $"Id IN(Select distinct  peopleId From people_planets_planets ppp inner join planets pl on " +
                               $"pl.Id = ppp.planetsId where ( Population> {population})) and " : "";
        }

        public static string GetConditionVehicle(this PeopleService input, string name)
        {

            return $"( Id IN(Select distinct  peopleId From people_vehicles_vehicles ppp inner join vehicles v on " +
                               $"v.Id = ppp.vehiclesId where v.name = '{name}')  ) and ";
        }


        public static string GetConditionFilm(this PeopleService input, string title)
        {

            return $"Id IN(Select distinct  peopleId From people_films_films pff inner join films f on " +
                                $"f.Id = pff.filmsId where f.title = '{title}'  ) and ";
        }

        public static string GetConditionStarship(this PeopleService input, string name)
        {

            return $"Id IN(Select  distinct  peopleId From people_starships_starships pss inner join starships s on " +
                            $"s.Id = pss.starshipsId where s.name = '{name}' ) and ";
        }

         

    }
}
