import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('trainers')
@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @Get()
  findAll() {
    return this.trainerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainerService.findOne(+id);
  }

  @Post()
  create(@Body() createTrainerDto: CreateTrainerDto) {
    return this.trainerService.create(createTrainerDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainerDto: UpdateTrainerDto) {
    return this.trainerService.update(+id, updateTrainerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainerService.remove(+id);
  }
}
