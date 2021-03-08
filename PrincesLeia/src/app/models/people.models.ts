import { Specie } from './specie.models';
import { Vehicle } from './vehicle.models';
import { Films } from './film.models';
import { StarShip } from './starship.models';

export class People {

    id?: number;
    name? :string;
    birth_year? :string; 
    eye_color? :string;
    gender? :string;
    hair_color? :string; 
    height? :string; 
    mass? :string; 
    skin_color? :string;
    homeworld? :string; 
    films?: Films[]=[]; 
    species?: Specie[]=[];
    starships?: StarShip[]=[];
    vehicles?: Vehicle[]=[];
    url? :string; 
    created? :string;
    edited? : string;    
}