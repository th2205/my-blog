import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImgService } from './Img.service';

@Controller('/img')
export class ImgController {
    constructor(private readonly imgService: ImgService) {}

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    async save(@UploadedFile() file: Express.Multer.File) {
        const data = await this.imgService.save({ file });
        console.log('s3 data', data);
    }
}
