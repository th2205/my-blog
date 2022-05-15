import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// const PORT = 8080;
const PORT = process.env.PORT;

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    const isDevMode = process.env.NODE_ENV === 'development';

    app.enableCors();

    app.setGlobalPrefix('api');
    await app.listen(PORT);
}

bootstrap();
