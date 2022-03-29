import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/User.entity';
import { UserModule } from './user/User.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1234',
            database: 'test',
            entities: [User],
            synchronize: true,
        }),
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
