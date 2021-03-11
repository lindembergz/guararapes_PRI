using LukeSkywalker.Services.Helpers;
using Xunit;

namespace Chewbacca
{
    public class Testes_Services_Helpers
    {
        [Fact]
        public void Test_Integridade_GetConditionSpecie()
        {
            string esperado = "Id IN(Select distinct peopleId From people_species_species pss inner join species s on " +
                               $"s.Id = pss.speciesId where s.name = 'Human' ) and ";
            string Atual = FunctionsPeopleService.GetConditionSpecie("Human");
            Assert.Equal(esperado, Atual);
        }
        [Fact]
        public void Test_Integridade_GetConditionVehicle()
        {
            string esperado = $"( Id IN(Select distinct  peopleId From people_vehicles_vehicles ppp inner join vehicles v on " +
                              $"v.Id = ppp.vehiclesId where v.name = 'HB20')  ) and ";
            string Atual = FunctionsPeopleService.GetConditionVehicle("HB20");
            Assert.Equal(esperado, Atual);
        }
        [Fact]
        public void Test_Integridade_GetConditionFilm()
        {
            string esperado = $"Id IN(Select distinct  peopleId From people_films_films pff inner join films f on " +
                              $"f.Id = pff.filmsId where f.title = 'A New Hope'  ) and ";
            string Atual = FunctionsPeopleService.GetConditionFilm("A New Hope");
            Assert.Equal(esperado, Atual);
        }
        [Fact]
        public void Test_Integridade_GetConditionStarship()
        {
            string esperado = $"Id IN(Select  distinct  peopleId From people_starships_starships pss inner join starships s on " +
                              $"s.Id = pss.starshipsId where s.name = 'Nave 1' ) and ";
            string Atual = FunctionsPeopleService.GetConditionStarship("Nave 1");
            Assert.Equal(esperado, Atual);
        }
        [Fact]
        public void Test_Integridade_GetConditionPlanet_com_Planet_Population()
        {
            string esperado = $"Id IN(Select distinct  peopleId From people_planets_planets ppp inner join planets pl on " +
                               $"pl.Id = ppp.planetsId where (pl.name = 'Terra' and Population> 1000)) and ";
            string Atual = FunctionsPeopleService.GetConditionPlanet("Terra", "1000");
            Assert.Equal(esperado, Atual);
        }
        [Fact]
        public void Test_Integridade_GetConditionPlanet_com_Planet_sem_Population()
        {
            string esperado = $"Id IN(Select distinct  peopleId From people_planets_planets ppp inner join planets pl on " +
                              $"pl.Id = ppp.planetsId where (pl.name = 'Terra')) and ";
            string Atual = FunctionsPeopleService.GetConditionPlanet("Terra", "");
            Assert.Equal(esperado, Atual);
        }
        [Fact]
        public void Test_Integridade_GetConditionPlanet_sem_Planet_com_Population()
        {
            string esperado = $"Id IN(Select distinct  peopleId From people_planets_planets ppp inner join planets pl on " +
                               $"pl.Id = ppp.planetsId where ( Population> 1000)) and ";
            string Atual = FunctionsPeopleService.GetConditionPlanet("", "1000");
            Assert.Equal(esperado, Atual);
        }


    }
}

