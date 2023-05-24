import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
<<<<<<< HEAD
    origin: 'http://localhost:3000/',
  });
=======
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
});
>>>>>>> parent of 2c714a6 (prettier format)
  await app.listen(AppModule.port);
}
bootstrap();
