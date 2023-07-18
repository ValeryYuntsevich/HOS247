import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DalModule } from '@hos-247/dal';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DalModule.forRoot()],
})
export class AppModule {}
