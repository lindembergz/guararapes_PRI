namespace LukeSkywalker.Services.Helpers
{
    public static class ExtensionPeopleService
    {
        public static string GetConditionSpecie(this PeopleService input, string name)
        {
            return FunctionsPeopleService.GetConditionSpecie(name);
        }

        public static string GetConditionPlanet(this PeopleService input, string name, string population)
        {
            return FunctionsPeopleService.GetConditionPlanet(name, population);
        }

        public static string GetConditionVehicle(this PeopleService input, string name)
        {
            return FunctionsPeopleService.GetConditionSpecie(name);
        }

        public static string GetConditionFilm(this PeopleService input, string title)
        {
            return FunctionsPeopleService.GetConditionSpecie(title);
        }

        public static string GetConditionStarship(this PeopleService input, string name)
        {
            return FunctionsPeopleService.GetConditionSpecie(name);
        }



    }
}
