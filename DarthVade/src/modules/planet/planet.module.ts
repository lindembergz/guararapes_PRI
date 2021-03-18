import { Module } from '@nestjs/common';
import { PlanetService } from './planet.service';
import { PlanetController } from './planet.controller';
import { PlanetRepository } from './planet.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicePull } from 'src/Services/Service.pull';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[TypeOrmModule.forFeature([PlanetRepository]),
  ClientsModule.register([
    { name: 'KAFKA_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['host.docker.internal:9094'],
        },
        consumer: {
          groupId: 'my-consumer-' + Math.random(),
        },
      },
    },
  ])
],
  controllers: [PlanetController],
  providers: [PlanetService, ServicePull]
})
export class PlanetModule {}
