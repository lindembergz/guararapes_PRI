import { Injectable , BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Starship } from './starship.entity';
import { StarshipRepository } from './starship.repository';

@Injectable()
export class StarshipService {

  constructor(
    @InjectRepository(StarshipRepository)
    private readonly _entityRepository: StarshipRepository,
    )
    {      
    }

  async create(entity: Starship):Promise<Starship>  {
    const saveEntity = await this._entityRepository.save(entity);
        return saveEntity;
  }

  async findAll() : Promise<Starship[]> {

   const entities: Starship[] = await this._entityRepository.find()
        return entities
  }

  async findOne(id: number): Promise<Starship> {
      if(!id)
      {
          throw new BadRequestException('Id é requerido!');
      }
      const entity: Starship = await this._entityRepository.
      findOne(id);
      if (!entity)
      {
          throw new BadRequestException('starship nao existe!');
      }
      return entity;
  }

  async  findOneIdByUrl(_url: string): Promise<number>
  {
    if(!_url)
    {
        throw new BadRequestException('url é requerido!');
    }
    const entity: Starship = await this._entityRepository.findOne({where: {url:_url }});
    if (!entity)
    {
        throw new BadRequestException('Id nao existe!');
    }
    return entity.Id;
  }

  async update(id: number, entity: Starship):Promise<void> {
    await this._entityRepository.update(id, entity);
  }

  async remove(id: number) {
    const metatraderExists = await this._entityRepository.
        findOne(id );

        if(!metatraderExists)
        {
            throw new BadRequestException('Starship nao existe!');  
        }
        await this._entityRepository.delete(id);
  }

  async   ExecRelationCommand(tableName: string , idsRelation: string   )
  {
    await this._entityRepository.
    createQueryBuilder().
    insert().
    into(tableName).
    //values([{filmsId: idMaster , speciesId: idDetail}]).
    values([ JSON.parse( idsRelation ) ]).
    execute();
  }
}
