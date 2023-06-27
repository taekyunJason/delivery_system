import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MyCart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  storeName: string;

  @Column()
  menuName: string;

  @Column()
  unitCount: number;

  @Column()
  menuPrice: number;

  @Column()
  deliveryPrice: number;

  @Column()
  totalPrice: number;
}
