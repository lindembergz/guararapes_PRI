namespace LukeSkywalker.Services.Helpers
{
    public static class FunctionsPeopleService
    {

        public static string GetConditionSpecie(string name)
        {

            return $"Id IN(Select distinct peopleId From people_species_species pss inner join species s on " +
                               $"s.Id = pss.speciesId where s.name = '{name}' ) and ";
        }

        public static string GetConditionPlanet(string name, string population)
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

        public static string GetConditionVehicle(string name)
        {

            return $"( Id IN(Select distinct  peopleId From people_vehicles_vehicles ppp inner join vehicles v on " +
                               $"v.Id = ppp.vehiclesId where v.name = '{name}')  ) and ";
        }


        public static string GetConditionFilm(string title)
        {

            return $"Id IN(Select distinct  peopleId From people_films_films pff inner join films f on " +
                                $"f.Id = pff.filmsId where f.title = '{title}'  ) and ";
        }

        public static string GetConditionStarship(string name)
        {

            return $"Id IN(Select  distinct  peopleId From people_starships_starships pss inner join starships s on " +
                            $"s.Id = pss.starshipsId where s.name = '{name}' ) and ";
        }

    }
}
