import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './Post.service';
import { Post as PostDTO } from './DTO';

@Controller('/posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/')
    async findAll() {
        return await this.postService.findAll();
    }

    @Post('/save')
    async save(@Body() body: PostDTO) {
        await this.postService.save(body);
    }
}
