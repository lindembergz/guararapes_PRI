using System;
using Xunit;

namespace XUnitTestProject1
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            string esperado = "Id IN(Select distinct peopleId From people_species_species pss inner join species s on " +
                               $"s.Id = pss.speciesId where s.name  'Human' ) and ";
            string Atual = "AAAAAAAAAAAAAAAAA";//FunctionsPeopleService.GetConditionSpecie("Human");
            Xunit.Assert.Equal(esperado, Atual);

        }
    }
}
