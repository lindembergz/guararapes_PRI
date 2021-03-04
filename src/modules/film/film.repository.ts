import { Repository, EntityRepository } from "typeorm";
import { Film } from "./film.entity";

@EntityRepository(Film)
export class FilmRepository extends Repository<Film>
{ 

    
} 
