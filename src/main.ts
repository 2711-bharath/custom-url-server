import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from 'src/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.PORT);
}
bootstrap();
