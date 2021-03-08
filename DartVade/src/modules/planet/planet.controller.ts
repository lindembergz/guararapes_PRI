import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ServicePull } from 'src/Services/Service.pull';
import { Planet } from './planet.entity';
import { PlanetService } from './planet.service';

@Controller('planet')
export class PlanetController {
  constructor(private readonly entityService: PlanetService,
    private readonly servicePull: ServicePull, 
    ) {}

  @Get('pull')
  pull() {  
    return   this.servicePull.Pull<Planet>('planets', [],[],
      //['people','films'],
     // ['residents','films'],
       this.entityService, 1); 
  }

  /*
  @Post()
  create(@Body() entity: Planet) {
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
  update(@Param('id') id: string, @Body() entity: Planet ) {
    return this.entityService.update(+id, entity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityService.remove(+id);
  }
  */
}
