import { IsDateString, IsString, MaxLength } from 'class-validator';

export class CreateStudentDetailDto {
  @IsString()
  @MaxLength(200)
  readonly address: string;

  @IsString()
  @MaxLength(30)
  readonly telephone: string;

  @IsDateString()
  readonly dateOfBirth: Date;
}
