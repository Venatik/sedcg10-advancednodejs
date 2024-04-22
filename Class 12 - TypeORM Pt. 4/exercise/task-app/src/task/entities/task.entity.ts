import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Priority } from 'util/priority.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Priority,
  })
  priority: Priority;

  @Column()
  completed: boolean;
}
