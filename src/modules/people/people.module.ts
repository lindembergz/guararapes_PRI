import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PeopleRepository } from './people.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicePull } from 'src/Services/Service.pull';

@Module({
  imports:[TypeOrmModule.forFeature([PeopleRepository])],
  controllers: [PeopleController],
  providers: [PeopleService, ServicePull]
})
export class PeopleModule {}
