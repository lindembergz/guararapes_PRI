
import { People } from './people.models';
import { Films } from './film.models';


export class Vehicle {
    id?: number;
    name? : string; 
    model? : string; 
    vehicle_class? : string; 
    manufacturer? : string; 
    length? : string; 
    cost_in_credits? : string; 
    crew? : string; 
    passengers? : string; 
    max_atmosphering_speed? : string; 
    cargo_capacity? : string; 
    consumables? : string; 
    people?: People[]=[];
    films?: Films[]=[];
    url? : string; 
    created? : string; 
    edited? : string;
}