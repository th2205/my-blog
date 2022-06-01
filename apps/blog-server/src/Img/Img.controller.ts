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
        console.log('controller', file);
        if (!file) throw new Error('파일없음');
        const url = await this.imgService.save({ file });
        console.log('s3 data', url);
        return {url};
    }
}
