import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ServicePull } from 'src/Services/Service.pull';
import { Vehicle } from './vehicle.entity';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly entityService: VehicleService,
    private readonly servicePull: ServicePull, 
   ) {}

 @Get('pull')
 pull() {  
  return  this.servicePull.Pull<Vehicle>('vehicles', [],[],
                                     this.entityService, 1); 
 }

 @Get('pull/relations')
 pullRelations(page:number = 1) {  
  return  this.servicePull.Pull<Vehicle>('vehicles',  
                                    ['people','films'],
                                    ['pilots','films'],
                                     this.entityService, 1); 
 }

  /*
  @Post()
  create(@Body() entity: Vehicle) {
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
  update(@Param('id') id: string, @Body() entity: Vehicle ) {
    return this.entityService.update(+id, entity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityService.remove(+id);
  }
  */
}
