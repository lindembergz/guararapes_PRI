import { Module } from '@nestjs/common';
import { StarshipService } from './starship.service';
import { StarshipController } from './starship.controller';
import { StarshipRepository } from './starship.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicePull } from 'src/Services/Service.pull';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[TypeOrmModule.forFeature([StarshipRepository]),
  ClientsModule.register([
    { name: 'KAFKA_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['host.docker.internal:9094'],
        },
        consumer: {
          groupId: 'Starship-consumer-' + Math.random(),
        },
      },
    },
  ])],
  controllers: [StarshipController],
  providers: [StarshipService , ServicePull]
})
export class StarshipModule {}
