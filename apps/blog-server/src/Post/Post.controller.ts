import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './Post.service';
import { Post as PostDTO } from './DTO';

@Controller('/posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/')
    async findAll() {
        return await this.postService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: number) {
        return await this.postService.findOne(id);
    }

    @Post('/save')
    async save(@Body() body: PostDTO) {
        await this.postService.save(body);
    }
}
