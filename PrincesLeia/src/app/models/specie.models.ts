
import { People } from './people.models';
import { Films } from './film.models';

export class Specie {

    id?: number;
    name? : string;
    classification? : string; 
    designation? : string; 
    averageHeight? : string; 
    averageLifespan? : string; 
    eyeColors? : string; 
    hairColors? : string; 
    skinColors? : string; 
    language? : string; 
    homeworld? : string; 
    people?: People[];
    films?: Films[];
    url? : string; 
    created? : string; 
    edited? : string;
    
}