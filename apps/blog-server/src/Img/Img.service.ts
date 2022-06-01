import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { Img } from '../Entity/Img.entity';
import { ImgDTO } from './DTO';

@Injectable()
export class ImgService {
    constructor(
        @InjectRepository(Img) private imgRepository: Repository<Img>,
    ) {}

    async save({ file }: ImgDTO) {
        console.log(file);
        const s3 = new S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: file.originalname + uuidv4(),
            Body: file.buffer,
            // ACL: 'public-read',
        };

        const s3Data = await s3.upload(params).promise();
        const url = s3Data.Location;
        console.log('===== = ==');
        console.log(s3Data);
        this.imgRepository.save({ url });

        return url;
    }

    async delete(id: number) {
        await this.imgRepository.delete(id);
    }
}
