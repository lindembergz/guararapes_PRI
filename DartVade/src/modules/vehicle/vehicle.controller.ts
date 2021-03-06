import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
//import { ServicePull } from 'src/Services/Service.pull';
import { Vehicle } from './vehicle.entity';
//import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly entityService: IEntityService<Vehicle>,
    private readonly servicePull: IServicePull, 
   ) {}

 @Get('pull')
 pull() {  
     this.servicePull.Pull<Vehicle>('vehicles', //[],[], 
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
