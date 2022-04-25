import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './Post.entity';
import { Post as PostDTO } from './DTO';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>,
    ) {}

    async findAll() {
        return await this.postRepository
            .createQueryBuilder('post')
            .select([
                'post.id',
                'post.title',
                'post.createdAt',
                'post.author',
                'post.coverImgUrl',
                'post.contentPreview',
            ])
            .getMany();
    }

    async save(post: PostDTO) {
        await this.postRepository.save(post);
    }

    async delete(id: number) {
        await this.postRepository.delete(id);
    }

    async update(post: PostDTO) {
        await this.update(post);
    }
}
