import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { writeFile } from 'fs/promises';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await writeFile('./test.txt', 'I dont work with opentelemetry');
}
bootstrap();
