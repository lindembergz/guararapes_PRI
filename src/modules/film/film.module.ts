import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { FilmRepository } from './film.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicePull } from 'src/Services/Service.pull';


@Module({
  imports:[TypeOrmModule.forFeature([FilmRepository])],
  controllers: [FilmController],
  providers: [FilmService,ServicePull, ]
})
export class FilmModule {}
