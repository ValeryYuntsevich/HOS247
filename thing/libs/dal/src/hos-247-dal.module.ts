import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntitySchema } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _ from 'pg';

import { CONNECTION_NAME } from './constants';
import { AllSchemas } from './entity-schemas';
import { ConfigurationKey } from './enums';

@Module({})
export class DalModule {
  static forRoot(settings?: { synchronize: boolean }): DynamicModule {
    const factory: (...args: unknown[]) => TypeOrmModuleOptions = (
      config: ConfigService
    ) => ({
      type: 'postgres',
      host: config.get<string>(ConfigurationKey.DatabaseHost),
      port: config.get<number>(ConfigurationKey.DatabasePort),
      username: config.get<string>(ConfigurationKey.DatabaseUsername),
      password: config.get<string>(ConfigurationKey.DatabasePassword),
      database: config.get<string>(ConfigurationKey.DatabaseName),
      entities: AllSchemas,
      synchronize: settings?.synchronize,
    });

    const providerFactory = () =>
      TypeOrmModule.forRootAsync({
        name: CONNECTION_NAME,
        useFactory: factory,
        inject: [ConfigService],
      });

    return {
      module: DalModule,
      imports: [providerFactory()],
      exports: [providerFactory()],
    };
  }

  static forFeature(entities?: EntitySchema[]): DynamicModule {
    const providerFactory = () =>
      TypeOrmModule.forFeature(entities, CONNECTION_NAME);
    return {
      module: DalModule,
      imports: [providerFactory()],
      exports: [providerFactory()],
    };
  }
}
