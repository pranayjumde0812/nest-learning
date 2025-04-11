import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppModule as AppFeatureModule } from './modules/app/app.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AppFeatureModule,
  ],
})
export class AppModule {}
