

import { People } from './people.models';
import { Films } from './film.models';

export class StarShip {

    id?: number;
    name? :string; 
    model?:string; 
    starship_class? :string; 
    manufacturer? :string; 
    cost_in_credits? :string; 
    length? :string; 
    crew? :string; 
    passengers? :string; 
    max_atmosphering_speed? :string; 
    hyperdrive_rating? :string;
    MGLT? :string; 
    cargo_capacity? :string; 
    consumables? :string; 
    people?: People[]=[];
    films?: Films[]=[];
    url?: string; 
    created? :string; 
    edited? :string; 
    
}