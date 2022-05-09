import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgModule } from './Img/Img.module';
import { Post } from './Post/Post.entity';
import { PostModule } from './Post/Post.module';
import { User } from './User/User.entity';
import { UserModule } from './User/User.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1234',
            database: 'test',
            entities: [User, Post],
            synchronize: true,
        }),
        UserModule,
        PostModule,
        ImgModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
