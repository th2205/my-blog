import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './Post.controller';
import { Post } from '../Entity/Post.entity';
import { PostService } from './Post.service';

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    exports: [TypeOrmModule],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}
