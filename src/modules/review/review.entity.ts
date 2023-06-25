import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  orderId: number;

  @Column()
  userId: number;

}