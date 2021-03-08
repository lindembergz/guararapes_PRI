import { Repository, EntityRepository } from "typeorm";
import { Planet } from "./planet.entity";

@EntityRepository(Planet)
export class PlanetRepository extends Repository<Planet>
{ } 
