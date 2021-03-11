import { People } from './people.models';
import { Films } from './film.models';

export class Planet {

    id?: number;
    name? : string;
    diameter? : string;    
    rotationPeriod? : string; 
    orbitalPeriod? : string; 
    gravity? : string; 
    population? : string; 
    climate? : string; 
    terrain? : string; 
    surfaceWater? : string;
    people?: People[]=[];
    films?: Films[]=[];
    url? : string; 
    created? : string; 
    edited? : string; 
}