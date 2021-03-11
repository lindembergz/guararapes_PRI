

import { People } from './people.models';
import { Films } from './film.models';

export class StarShip {

    id?: number;
    name? :string; 
    model?:string; 
    starshipClass? :string; 
    manufacturer? :string; 
    costInCredits? :string; 
    length? :string; 
    crew? :string; 
    passengers? :string; 
    maxAtmospheringSpeed? :string; 
    hyperdriveRating? :string;
    MGLT? :string; 
    cargoCapacity? :string; 
    consumables? :string; 
    people?: People[]=[];
    films?: Films[]=[];
    url?: string; 
    created? :string; 
    edited? :string; 
    
}