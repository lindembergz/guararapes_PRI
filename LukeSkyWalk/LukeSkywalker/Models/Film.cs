using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LukeSkywalker.Models
{
    public class Film
    {
        public int id { get;  set; }
        public string title { get;  set;  }
        public int  episode_id { get;  set; }
        public string opening_crawl { get; set; }
        public string director { get;  set; }
        public string producer { get;  set; }
        public string release_date { get;  set; }        
        public List<Specie> species { get;  set; }
        public List<Starship> starships { get;  set; }
        public List<Vehicle> vehicles { get;  set; }
        public List<People> people { get;  set; }
        public List<Planet> planets { get;  set; }
        public string url { get;  set; }
        public string created { get;  set; }
        public string edited { get;  set; }
    }
}
