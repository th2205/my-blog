import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Img {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    url: Date;
}
