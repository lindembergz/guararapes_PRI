using Xunit;

namespace Prime.UnitTests.Services
{
    public class PrimeService_IsPrimeShould
    {
        [Fact]
        public void IsPrime_InputIs1_ReturnFalse()
        {
            string esperado = "Id IN(Select distinct peopleId From people_species_species pss inner join species s on " +
                               $"s.Id = pss.speciesId where s.name  'Human' ) and ";
            string Atual = "AAAAAAAAAAAAAAAAA";//FunctionsPeopleService.GetConditionSpecie("Human");
            Assert.Equal("XXX", "ZZZ");
        }
    }
}