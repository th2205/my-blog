import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Img } from './Img.entity';
import { ImgDTO } from './DTO';

@Injectable()
export class ImgService {
    constructor(
        @InjectRepository(Img) private imgRepository: Repository<Img>,
    ) {}

    async save(url: ImgDTO) {
        await this.imgRepository.save(url);
    }

    async delete(id: number) {
        await this.imgRepository.delete(id);
    }
}
