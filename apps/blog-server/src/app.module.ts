import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './Post/Post.module';
import { UserModule } from './User/User.module';
import { ImgModule } from './Img/Img.module';
import { Post } from './Post/Post.entity';
import { User } from './User/User.entity';
import { Img } from './Img/Img.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1234',
            database: 'test',
            entities: [Post, User, Img],
            synchronize: true,
        }),
        ConfigModule.forRoot(),
        UserModule,
        PostModule,
        ImgModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
