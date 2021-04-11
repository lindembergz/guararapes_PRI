import { Injectable , BadRequestException, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringify } from 'querystring';
import { Film } from './film.entity';
import { FilmRepository } from './film.repository';

import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Injectable({ scope: Scope.DEFAULT })
export class FilmService implements IEntityService<Film>, OnModuleInit{

  private kafkaProducer: Producer;

  constructor(
    @InjectRepository(FilmRepository) private readonly _entityRepository: FilmRepository,
    @Inject('KAFKA_SERVICE') private  readonly clientKafka: ClientKafka,
    )
    {      
    }

    async onModuleInit() {
      this.kafkaProducer = await this.clientKafka.connect();
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

  async create(entity: Film):Promise<Film>  {
    ///const saveEntity = await this._entityRepository.
    //save(entity);

    const result = await this.kafkaProducer.send({
      topic: 'films',
      messages: [
          {key: Math.random()+"", value: JSON.stringify(entity) }
          ]
      });
   
    return null;   
  }

  async  send(entity: Film):Promise<void>  
  {
   
  }

  async findAll() : Promise<Film[]> 
  {
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

  async  findOneIdByUrl(_url: string ): Promise<bigint>
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
    return entity.id;
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
  
  

}
