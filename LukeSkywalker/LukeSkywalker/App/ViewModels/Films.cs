#nullable disable

namespace LukeSkywalker.App.ViewModels
{
    public partial class FilmsViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string OpeningCrawl { get; set; }
        public string Director { get; set; }
        public string Producer { get; set; }
        public string ReleaseDate { get; set; }
        public string Url { get; set; }
        public string Created { get; set; }
        public string Edited { get; set; }
        public int EpisodeId { get; set; }

    }
}