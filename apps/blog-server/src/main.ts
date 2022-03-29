import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8080;

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    const isDevMode = process.env.NODE_ENV;

    if (isDevMode === 'development') app.enableCors();

    await app.listen(PORT);
}
bootstrap();
