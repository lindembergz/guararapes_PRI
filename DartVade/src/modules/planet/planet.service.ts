import { Injectable , BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Planet } from './planet.entity';
import { PlanetRepository } from './planet.repository';

@Injectable()
export class PlanetService {

  constructor(
    @InjectRepository(PlanetRepository)
    private readonly _entityRepository: PlanetRepository,
    )
    {      
    }

  async create(entity: Planet):Promise<Planet>  {
    const saveEntity = await this._entityRepository.save(entity);
        return saveEntity;
  }

  async findAll() : Promise<Planet[]> {

   const entities: Planet[] = await this._entityRepository.find()
        return entities
  }

  async findOne(id: number): Promise<Planet> {
      if(!id)
      {
          throw new BadRequestException('Id é requerido!');
      }
      const entity: Planet = await this._entityRepository.
      findOne(id);
      if (!entity)
      {
          throw new BadRequestException('Planet nao existe!');
      }
      return entity;
  }

  async  findOneIdByUrl(_url: string): Promise<number>
  {
    if(!_url)
    {
        throw new BadRequestException('url é requerido!');
    }
    const entity: Planet = await this._entityRepository.findOne({where: {url:_url }});
    if (!entity)
    {
        throw new BadRequestException('Id nao existe!');
    }
    return entity.Id;
  }

  async update(id: number, entity: Planet):Promise<void> {
    await this._entityRepository.update(id, entity);
  }

  async remove(id: number) {
    const metatraderExists = await this._entityRepository.
        findOne(id );

        if(!metatraderExists)
        {
            throw new BadRequestException('Planet nao existe!');  
        }
        await this._entityRepository.delete(id);
  }

  async ExecRelationCommand(tableName: string , idsRelation: string  )
  {
    //console.log( tableName + "   "+ idsRelation ); 
    await this._entityRepository.
    createQueryBuilder().
    insert().
    into(tableName).
    //values([{filmsId: idMaster , speciesId: idDetail}]).
    values([ JSON.parse( idsRelation ) ]).
    execute();
  }
}
