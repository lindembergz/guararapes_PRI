import { People } from './people.models';
import { Films } from './film.models';

export class Planet {

    id?: number;
    name? : string;
    diameter? : string;    
    rotation_period? : string; 
    orbital_period? : string; 
    gravity? : string; 
    population? : string; 
    climate? : string; 
    terrain? : string; 
    surface_water? : string;
    people?: People[]=[];
    films?: Films[]=[];
    url? : string; 
    created? : string; 
    edited? : string; 
}