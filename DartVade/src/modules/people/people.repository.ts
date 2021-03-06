import { Repository, EntityRepository } from "typeorm";
import { People } from "./people.entity";

@EntityRepository(People)
export class PeopleRepository extends Repository<People>
{ } 
