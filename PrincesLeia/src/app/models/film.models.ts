import { Specie } from './specie.models';
import { People } from './people.models';
import { Planet } from './planet.models';
import { Vehicle } from './vehicle.models';
import { StarShip } from './starship.models';

export class Films {
  id?: number;
  title?: string;
  episode_id?: number;  
  opening_crawl?: string;
  director?: string;
  producer?: string;
  release_date?: string;     
  species?: Specie[]=[];
  starships?:StarShip[]=[];
  vehicles?:Vehicle[]=[];
  people?:People[]=[];
  planets?:Planet[]=[];
  url?: string;
  created?: string;
  edited?: string;
}
