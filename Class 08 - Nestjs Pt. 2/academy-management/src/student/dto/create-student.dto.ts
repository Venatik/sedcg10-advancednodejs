import { IsEmail, IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MinLength(5)
  readonly name: string;

  @IsNumber()
  @Min(18)
  readonly age: number;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly academyId: string;
}
