import { Specie } from './specie.models';
import { Vehicle } from './vehicle.models';
import { Films } from './film.models';
import { StarShip } from './starship.models';

export class People {

    id?: number;
    name? :string;
    birthYear? :string; 
    eyeColor? :string;
    gender? :string;
    hairColor? :string; 
    height? :string; 
    mass? :string; 
    skinColor? :string;
    homeworld? :string; 
    films?: Films[]=[]; 
    species?: Specie[]=[];
    starships?: StarShip[]=[];
    vehicles?: Vehicle[]=[];
    url? :string; 
    created? :string;
    edited? : string;    
}