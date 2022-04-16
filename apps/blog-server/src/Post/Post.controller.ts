import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './Post.service';
import { Post as PostDTO } from './DTO';

@Controller('/posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/')
    async getHello() {
        return this.postService.findAll();
    }

    @Post('/save')
    async save(@Body() body: PostDTO) {
        console.log(body);
        const aa = await this.postService.save(body);
        console.log(aa);
        const posts = await this.postService.findAll();
        console.log(posts);
        return { result: 100 };
    }
}
