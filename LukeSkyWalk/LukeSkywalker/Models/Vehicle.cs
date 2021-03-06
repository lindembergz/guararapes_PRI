using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LukeSkywalker.Models
{
    public class Vehicle
    {
        public int id { get; set; }
        public string name { get; set; } // -- The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
        public string model { get; set; } // -- The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
        public string vehicle_class { get; set; } // -- The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
        public string manufacturer { get; set; } // -- The manufacturer of this vehicle. Comma separated if more than one.
        public string length { get; set; } // -- The length of this vehicle in meters.
        public string cost_in_credits { get; set; } // -- The cost of this vehicle new, in Galactic Credits.
        public string crew { get; set; } // -- The number of personnel needed to run or pilot this vehicle.
        public string passengers { get; set; } // -- The number of non-essential people this vehicle can transport.
        public string max_atmosphering_speed { get; set; } // -- The maximum speed of this vehicle in the atmosphere.
        public string cargo_capacity { get; set; } // -- The maximum number of kilograms that this vehicle can transport.
        public string consumables { get; set; } // The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
        public List<People> people { get; set; }//-- An array of People URL Resources that this vehicle has been piloted by.
        public List<Film> films { get; set; }// -- An array of Film URL Resources that this vehicle has appeared in.
        public string url { get; set; } // -- the hypermedia URL of this resource.
        public string created { get; set; } // -- the ISO 8601 date format of the time that this resource was created.
        public string edited { get; set; } // -- the ISO 8601 date format of the time that this resource was edited.
    }
}
