import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ServicePull } from 'src/Services/Service.pull';
import { People } from './people.entity';
import { PeopleService } from './people.service';

@Controller('People')
export class PeopleController {
  constructor(private readonly entityService: PeopleService,
    private readonly servicePull: ServicePull, 
    ) {}


  @Get('pull')
  pull() {  
    return  this.servicePull.Pull<People>('people', [],[],                       
                                   
                                     this.entityService, 1 ); 
  }

  @Get('pull/relations')
  pullRelations() {  
    return  this.servicePull.Pull<People>('people',                           
                                     ['species','starships','vehicles','films' ],
                                     ['species','starships','vehicles','films' ],
                                     this.entityService, 1 ); 
  }

  /*
  @Post()
  create(@Body() entity: People) {
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
  update(@Param('id') id: string, @Body() entity: People ) {
    return this.entityService.update(+id, entity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityService.remove(+id);
  }
  */
 
}
