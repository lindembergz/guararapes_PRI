import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '../config/config.module';
import {ConfigService} from '../config/config.service';
import {Configuration} from '../config/config.key';
import {ConnectionOptions} from 'typeorm';
import * as path from 'path';

export const databaseProviders=[
    TypeOrmModule.forRootAsync( {
        imports:[ConfigModule],
        inject:[ConfigService],
        async useFactory( config: ConfigService )
        {
            return {               
                type: 'mysql' as 'mysql',
                host: config.get(Configuration.HOST),
                username:  config.get(Configuration.USERNAME),
                password: config.get(Configuration.PASSWORD),
                database: config.get(Configuration.DATABASE),
                port: 3306,        

                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/database/migrations/*{.ts,.js}'],

            } as ConnectionOptions
        },
    }) ,
];