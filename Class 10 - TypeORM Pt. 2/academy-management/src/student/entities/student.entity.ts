import { Academy } from 'src/academy/entities/academy.entity';
import { StudentDetail } from 'src/student-details/entities/student-detail.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
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

  @OneToOne(() => StudentDetail, { cascade: true })
  @JoinColumn() // This will create the foreign key in the student table. JoinColumn decorator defines the owner side of the relationship. This relation is ONLY defined in the owner side.
  studentDetail: StudentDetail;
}
