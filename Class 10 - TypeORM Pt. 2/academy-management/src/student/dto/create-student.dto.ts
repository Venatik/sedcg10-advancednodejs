import { IsNumber, IsString } from 'class-validator';
import { CreateStudentDetailDto } from 'src/student-details/dto/create-student-detail.dto';

export class CreateStudentDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsString()
  readonly email: string;

  @IsNumber()
  readonly academyId: number;

  studentDetail: CreateStudentDetailDto;
}
