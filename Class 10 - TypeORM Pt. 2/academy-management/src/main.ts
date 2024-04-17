import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // localhost:4000/academy ==> localhost:4000/api/academy
  await app.listen(4000);
}
bootstrap();
