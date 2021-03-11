import { Specie } from './specie.models';
import { People } from './people.models';
import { Planet } from './planet.models';
import { Vehicle } from './vehicle.models';
import { StarShip } from './starship.models';

export class Films {
  id?: number;
  title?: string;
  episodeId?: number;  
  openingCrawl?: string;
  director?: string;
  producer?: string;
  releaseDate?: string;     
  url?: string;
  created?: string;
  edited?: string;
  films?: []=[];
  starships?:[]=[];
  vehicles?:[]=[];
  people?:[]=[];
  planets?:[]=[];
}
