import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgController } from './Img.controller';
import { Img } from './Img.entity';
import { ImgService } from './Img.service';

@Module({
    imports: [TypeOrmModule.forFeature([Img])],
    exports: [TypeOrmModule],
    controllers: [ImgController],
    providers: [ImgService],
})
export class ImgModule {}
