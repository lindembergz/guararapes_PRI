import { Repository, EntityRepository } from "typeorm";
import { Specie } from "./specie.entity";

@EntityRepository(Specie)
export class SpecieRepository extends Repository<Specie>
{ } 
