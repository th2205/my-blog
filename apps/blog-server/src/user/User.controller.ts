import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './User.service';

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/')
    async getHello() {
        return this.userService.findAll();
    }

    @Post('/login')
    login() {
        return { result: 100 };
    }
}
