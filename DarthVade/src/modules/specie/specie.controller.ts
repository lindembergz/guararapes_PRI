import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ServicePull } from 'src/Services/Service.pull';
import { Specie } from './specie.entity';
import { SpecieService } from './specie.service';

@Controller('specie')
export class SpecieController {
  constructor(private readonly entityService: SpecieService  ,
    private readonly servicePull: ServicePull, 
    ) {}

  @Get('pull')
  pull(page:number = 1) {  
    return  this.servicePull.Pull<Specie>('species', [],[],                                  
                                    this.entityService, 1); 
  }

  @Get('pull/relations')
  pullRelations() {  
    return  this.servicePull.Pull<Specie>('species', 
                                    ['people','films'],
                                    ['people','films'],  
                                    this.entityService, 1); 
  }

  /*
  @Post()
  create(@Body() entity: Specie) {
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
  update(@Param('id') id: string, @Body() entity: Specie ) {
    return this.entityService.update(+id, entity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityService.remove(+id);
  }
  */
}
