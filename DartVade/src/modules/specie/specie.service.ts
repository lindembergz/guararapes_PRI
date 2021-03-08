import { Injectable , BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Specie } from './specie.entity';
import { SpecieRepository } from './specie.repository';

@Injectable()
export class SpecieService {

  constructor(
    @InjectRepository(SpecieRepository)
    private readonly _entityRepository: SpecieRepository,
    )
    {      
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
  
  async create(entity: Specie):Promise<Specie>  {
    const saveEntity = await this._entityRepository.save(entity);
        return saveEntity;
  }

  async findAll() : Promise<Specie[]> {

   const entities: Specie[] = await this._entityRepository.find()
        return entities
  }

  async findOne(id: number): Promise<Specie> {
      if(!id)
      {
          throw new BadRequestException('Id é requerido!');
      }
      const entity: Specie = await this._entityRepository.
      findOne(id);
      if (!entity)
      {
          throw new BadRequestException('Specie nao existe!');
      }
      return entity;
  }

  async  findOneIdByUrl(_url: string): Promise<bigint>
  {
    if(!_url)
    {
        throw new BadRequestException('url é requerido!');
    }
    const entity: Specie = await this._entityRepository.findOne({where: {url:_url }});
    if (!entity)
    {
        throw new BadRequestException('Id nao existe!');
    }
    return entity.id;
  }

  async update(id: number, entity: Specie):Promise<void> {
    await this._entityRepository.update(id, entity);
  }

  async remove(id: number) {
    const Exists = await this._entityRepository.
        findOne(id );

        if(!Exists)
        {
            throw new BadRequestException('Especie nao existe!');  
        }
        await this._entityRepository.delete(id);
  }
  

  
}
