import { Injectable , BadRequestException, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringify } from 'querystring';
import { Film } from './film.entity';
import { FilmRepository } from './film.repository';

@Injectable({ scope: Scope.DEFAULT })
export class FilmService implements IEntityService<Film>{

  constructor(
    @InjectRepository(FilmRepository)
    private readonly _entityRepository: FilmRepository,
    )
    {      
    }

  async create(entity: Film):Promise<Film>  {
    const saveEntity = await this._entityRepository.save(entity);
        return saveEntity;
  }

  async findAll() : Promise<Film[]> {

   const entities: Film[] = await this._entityRepository.find()
        return entities
  }

  async findOne(id: number): Promise<Film> {
      if(!id)
      {
          throw new BadRequestException('Id é requerido!');
      }
      const entity: Film = await this._entityRepository.
      findOne(id);
      if (!entity)
      {
          throw new BadRequestException('filme nao existe!');
      }
      return entity;
  }

  async  findOneIdByUrl(_url: string ): Promise<number>
  {
    if(!_url)
    {
        throw new BadRequestException('url é requerido!');
    }
    const entity: Film = await this._entityRepository.findOne({where: {url:_url }});
    if (!entity)
    {
        throw new BadRequestException('filme nao existe!');
    }
    return entity.Id;
  }

  async update(id: number, entity: Film):Promise<void> {
    await this._entityRepository.update(id, entity);
  }

  async remove(id: number) {
    const  Exists = await this._entityRepository.
        findOne(id );

        if(! Exists)
        {
            throw new BadRequestException('Filme nao existe!');  
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
    values([ JSON.parse( idsRelation ) ]).
    execute();
  }

}
