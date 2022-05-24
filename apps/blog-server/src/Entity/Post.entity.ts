import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column()
    author: string;

    @Column()
    title: string;

    @Column()
    contentPreview: string;

    @Column({ type: 'text' })
    content: string;

    @Column()
    coverImgUrl: string;
}
