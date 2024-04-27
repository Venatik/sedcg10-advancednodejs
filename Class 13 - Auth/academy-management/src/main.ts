import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // localhost:3000/academy ==> localhost:3000/api/academy

  const config = new DocumentBuilder()
    .setTitle('Academy Management')
    .setDescription('Application for managing academies and students')
    .setVersion('1.0')
    .addTag('academies')
    .addBearerAuth()
    .build();

  // The default value of ignoreGlobalPrefix is false. If we want to keep the global prefix we can omit it.
  const options: SwaggerDocumentOptions = {
    ignoreGlobalPrefix: false,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
