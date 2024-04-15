import { IsEnum, IsInt, IsNumber, IsString, Min } from 'class-validator';
import { Difficulty } from '../../utils/difficulty.enum';

export class CreateSubjectDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Min(4)
  readonly numberOfClasses: number;

  @IsEnum(Difficulty)
  readonly difficulty: Difficulty;

  @IsNumber()
  readonly academyId: number;

  @IsString()
  readonly trainerId: string;
}
