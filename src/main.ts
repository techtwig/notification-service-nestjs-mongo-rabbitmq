import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {Logger} from "@nestjs/common";

async function bootstrap() {
  console.log = (...args) => null;
  console.info = (...args) => null;
  console.debug = (...args) => null;
  console.error = (...args) => null;
  console.warn = (...args) => null;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await app.listen(3000);
}
bootstrap().then(() => {
  Logger.debug('app listening port 3000')
})
