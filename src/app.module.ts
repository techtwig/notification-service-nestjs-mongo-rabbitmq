import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CacheModule} from "@nestjs/cache-manager";
import {ConfigModule} from "@nestjs/config";
import {appConfig} from "./@core/config/app-config";
import {MongooseModule} from "@nestjs/mongoose";
import {MongooseConfigService} from './@core/libs/mongoose/mongoose-config.service';

@Module({
    imports: [
        CacheModule.register(),
        ConfigModule.forRoot(appConfig),
        MongooseModule.forRootAsync({
            useClass: MongooseConfigService,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
