import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.key';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmModule } from './modules/film/film.module';
import { PeopleModule } from './modules/people/people.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { SpecieModule } from './modules/specie/specie.module';
import { PlanetModule } from './modules/planet/planet.module';
import { StarshipModule } from './modules/starship/starship.module';

@Module({
  
  controllers: [AppController, 
  ],
  providers: [AppService    
  ],
  imports: [ConfigModule,
            DatabaseModule,
            FilmModule,
            PeopleModule,
            VehicleModule,
            SpecieModule,
            PlanetModule,
            StarshipModule,         
          ],
})
export class AppModule {

  static port: number | string;
  constructor(private readonly _configService: ConfigService){
    AppModule.port= this._configService.get(Configuration.PORT)

  }

}
