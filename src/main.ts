import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService); // Get ConfigService instance
  const port = configService.get<number>('PORT') || 3000; // Default to 3000 if PORT is not set

  const config = new DocumentBuilder()
    .setTitle('NestJS Learning App')
    .setDescription('The NestJS Learning API description')
    .setVersion('1.0')
    .addTag('nestjs')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger UI is available at: http://localhost:${port}/api`);
}

bootstrap().catch((error) => {
  console.error('Error starting the application:', error);
});
