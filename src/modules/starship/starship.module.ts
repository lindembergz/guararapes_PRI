import { Module } from '@nestjs/common';
import { StarshipService } from './starship.service';
import { StarshipController } from './starship.controller';
import { StarshipRepository } from './starship.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicePull } from 'src/Services/Service.pull';

@Module({
  imports:[TypeOrmModule.forFeature([StarshipRepository])],
  controllers: [StarshipController],
  providers: [StarshipService , ServicePull]
})
export class StarshipModule {}
