import { IsNumber } from 'class-validator';
import { CreateStudentDto } from './create-student.dto';

export class StudentDto extends CreateStudentDto {
  @IsNumber()
  readonly id: number;
}
