import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column()
    title: string;

    @Column()
    content: string;
}
