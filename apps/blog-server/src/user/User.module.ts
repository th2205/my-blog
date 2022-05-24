import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './User.controller';
import { User } from '../Entity/User.entity';
import { UserService } from './User.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
