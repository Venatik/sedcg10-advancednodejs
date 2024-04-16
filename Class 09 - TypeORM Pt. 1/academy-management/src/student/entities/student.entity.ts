import { Academy } from 'src/academy/entities/academy.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @ManyToOne(() => Academy, (academy) => academy.students)
  @JoinColumn({ name: 'academyId' })
  academy: Academy;

  @Column()
  academyId: number;
}
