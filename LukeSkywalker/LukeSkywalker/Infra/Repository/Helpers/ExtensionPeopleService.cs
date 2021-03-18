namespace LukeSkywalker.Services.Helpers
{
    public static class ExtensionPeopleService
    {
        public static string GetConditionSpecie(this RepositoryPeople input, string name)
        {
            return FunctionsPeopleService.GetConditionSpecie(name);
        }

        public static string GetConditionPlanet(this RepositoryPeople input, string name, string population)
        {
            return FunctionsPeopleService.GetConditionPlanet(name, population);
        }

        public static string GetConditionVehicle(this RepositoryPeople input, string name)
        {
            return FunctionsPeopleService.GetConditionSpecie(name);
        }

        public static string GetConditionFilm(this RepositoryPeople input, string title)
        {
            return FunctionsPeopleService.GetConditionSpecie(title);
        }

        public static string GetConditionStarship(this RepositoryPeople input, string name)
        {
            return FunctionsPeopleService.GetConditionSpecie(name);
        }



    }
}
