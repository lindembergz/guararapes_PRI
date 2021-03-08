import { Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import { Http2ServerRequest } from 'http2';
import { ServicePull } from 'src/Services/Service.pull';
import { Film } from './film.entity';
import { FilmService } from './film.service';


@Controller('film')
export class FilmController {
  constructor(private readonly entityService: FilmService,    
              private readonly servicePull: ServicePull,  
    ) {}

    @Get('pull')
    pull() {  
      return  this.servicePull.Pull<Film>('films',  
             [],[],
            this.entityService, 1);  
        
    }

    @Get('pull/relations')
    pullRelations() {  
      return  this.servicePull.Pull<Film>('films',             
            [ 'species' ,'starships','vehicles','people','planets'],
            [ 'species' ,'starships','vehicles','characters','planets'],
            this.entityService, 1);  
        
    }

  /*
  @Post()
  create(@Body() entity: Film) {
    return this.entityService.create(entity);
  }

  @Get()
  findAll() {
    return this.entityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() entity: Film ) {
    return this.entityService.update(+id, entity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityService.remove(+id);
  }
  */


 
}
