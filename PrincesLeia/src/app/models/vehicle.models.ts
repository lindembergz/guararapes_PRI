
import { People } from './people.models';
import { Films } from './film.models';


export class Vehicle {
    id?: number;
    name? : string; 
    model? : string; 
    vehicleClass? : string; 
    manufacturer? : string; 
    length? : string; 
    costInCredits? : string; 
    crew? : string; 
    passengers? : string; 
    maxAtmospheringSpeed? : string; 
    cargoCapacity? : string; 
    consumables? : string; 
    people?: People[]=[];
    films?: Films[]=[];
    url? : string; 
    created? : string; 
    edited? : string;
}