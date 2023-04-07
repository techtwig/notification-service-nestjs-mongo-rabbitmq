import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CacheModule, CacheModuleOptions, CacheStore, CacheStoreSetOptions} from "@nestjs/cache-manager";
import Redis from 'ioredis';
import {memoryStore} from 'cache-manager';
import * as process from "process";

class CustomCache implements CacheStore {
    private store: Redis;

    constructor() {
        this.store = new Redis({
            host: '127.0.0.1',
            port: 6379,
        })
        this.store.on('error', function (e) {
            console.log(e)
            process.exit(1)
        })
    }

    del(key: string): void | Promise<void> {
        return this.store.del(key) as unknown as void;
    }

    get<T>(key: string): Promise<T | undefined> | T | undefined {
        return this.store.get(key) as unknown as T;
    }

    set<T>(key: string, value: T, options?: CacheStoreSetOptions<T> | number): Promise<void> | void {
        return this.store.set(key, value as any) as unknown as void;
    }
}

@Module({
    imports: [
        CacheModule.registerAsync({
            isGlobal: true,
            // imports: [ConfigModule],
            useFactory: async (): Promise<CacheModuleOptions> => {
                const store = await new CustomCache();
                // const store = memoryStore;
                return {store}
            },
            // inject: [ConfigService],
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
