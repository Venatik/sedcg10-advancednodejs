import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademyModule } from './academy/academy.module';
import { SubjectModule } from './subject/subject.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // If set to true, ConfigModule will be available in all modules
      envFilePath: '.env', // By default it will look for .env file in the root directory, so this line is optional
      ignoreEnvFile: false, // If set to true, ConfigModule will not read .env file
    }),
    AcademyModule,
    SubjectModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
