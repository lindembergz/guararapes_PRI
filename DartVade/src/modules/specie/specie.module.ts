import { Module } from '@nestjs/common';
import { SpecieService } from './specie.service';
import { SpecieController } from './specie.controller';
import { SpecieRepository } from './specie.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicePull } from 'src/Services/Service.pull';

@Module({
  imports:[TypeOrmModule.forFeature([SpecieRepository])],
  controllers: [SpecieController],
  providers: [SpecieService, ServicePull]
})
export class SpecieModule {}
