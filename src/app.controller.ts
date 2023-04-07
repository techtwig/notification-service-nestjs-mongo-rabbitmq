import {CACHE_MANAGER, CacheKey, CacheInterceptor} from '@nestjs/cache-manager';
import {Cache} from "cache-manager";
import {Controller, Get, Inject, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @CacheKey('name')
  @UseInterceptors(CacheInterceptor)
  @Get()
  async getHello(): Promise<string> {
    console.log('get', await this.cacheManager.get('name'))
    await this.cacheManager.set('name', 'Hasan')
    return this.appService.getHello();
  }
}
