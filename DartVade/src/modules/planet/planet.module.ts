import { Module } from '@nestjs/common';
import { PlanetService } from './planet.service';
import { PlanetController } from './planet.controller';
import { PlanetRepository } from './planet.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicePull } from 'src/Services/Service.pull';

@Module({
  imports:[TypeOrmModule.forFeature([PlanetRepository])],
  controllers: [PlanetController],
  providers: [PlanetService, ServicePull]
})
export class PlanetModule {}
