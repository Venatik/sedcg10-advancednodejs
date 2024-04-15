import { IsNumber, IsString } from 'class-validator';
import { CreateAcademyDto } from './create-academy.dto';

export class AcademyDto extends CreateAcademyDto {
  @IsNumber()
  readonly id: number;
}
