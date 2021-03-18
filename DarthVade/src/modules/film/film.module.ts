import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { FilmRepository } from './film.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicePull } from 'src/Services/Service.pull';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports:[TypeOrmModule.forFeature([FilmRepository]),
  ClientsModule.register([
    { name: 'KAFKA_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['host.docker.internal:9094'],
        },
        consumer: {
          groupId: 'Films-consumer-' + Math.random(),
        },
      },
    },
  ])
],
  controllers: [FilmController],
  providers: [FilmService,ServicePull, ]
})
export class FilmModule {}
