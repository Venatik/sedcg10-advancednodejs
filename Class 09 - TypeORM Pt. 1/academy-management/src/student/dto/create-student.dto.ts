import { IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsString()
  readonly email: string;

  @IsNumber()
  readonly academyId: number;
}
