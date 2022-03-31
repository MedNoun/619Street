import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const corsOptions = {
		origin: ['http://localhost:4201', 'http://localhost:4200'],
		optionsSuccessStatus: 200
	}
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
