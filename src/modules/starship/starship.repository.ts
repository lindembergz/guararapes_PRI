import { Repository, EntityRepository } from "typeorm";
import { Starship } from "./starship.entity";

@EntityRepository(Starship)
export class StarshipRepository extends Repository<Starship>
{ } 
