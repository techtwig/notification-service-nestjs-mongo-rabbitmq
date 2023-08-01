import * as Joi from 'joi';

export const appConfig = {
  isGlobal: true,
  validationSchema: Joi.object({
    APP_ENV: Joi.string().required(),
    MONGODB_URI: Joi.string().required(),
  }),
};

export enum ConfigKey {
  APP_ENV = 'APP_ENV',
  MONGODB_URI = 'MONGODB_URI',
  REDIS_HOST = 'REDIS_HOST',
  REDIS_PORT = 'REDIS_PORT',
}

export enum AppEnvironment {
  LOCAL = 'LOCAL',
  STAGE = 'DEV',
  TESTING = 'TESTING',
  PROD = 'PRODUCTION',
}
