import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { VehicleRepository } from './vehicle.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicePull } from 'src/Services/Service.pull';

@Module({
  imports:[TypeOrmModule.forFeature([VehicleRepository])],
  controllers: [VehicleController],
  providers: [VehicleService, ServicePull]
})
export class VehicleModule {}
