import {CACHE_MANAGER, CacheKey, CacheInterceptor} from '@nestjs/cache-manager';
import {Cache} from "cache-manager";
import {Controller, Get, Inject, Logger, Render, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @CacheKey('name')
  @UseInterceptors(CacheInterceptor)
  @Get()
  async getHello(): Promise<string> {
    Logger.warn('Hello World')
    return this.appService.getHello();
  }
}
