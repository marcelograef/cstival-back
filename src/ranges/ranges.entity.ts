import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ranges {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  key: string;
  @Column()
  situation: string;
  @Column({ nullable: true })
  bluff: string;
  @Column({ nullable: true })
  call: string;
  @Column({ nullable: true })
  fold: string;
  @Column({ nullable: true })
  raise: string;
  @Column({ nullable: true, length: 5000 })
  info: string;
}
