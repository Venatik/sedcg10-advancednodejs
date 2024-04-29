import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@ApiTags('students')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
    description: 'Filter student by name',
  })
  @ApiQuery({
    name: 'academyId',
    required: false,
    type: Number,
    description: 'Filter student by academyId',
  })
  @ApiQuery({
    name: 'page',
    required: false,
  })
  @ApiQuery({
    name: 'sort',
    required: false,
  })
  findAll(
    @Query('name') name: string,
    @Query('academyId') academyId: number,
    @Query('page') page: number,
    @Query('sort') sort: string,
  ): Promise<Student[]> {
    // return this.studentService.findAll();
    return this.studentService.findAll(name, academyId, page, sort);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentService.findOne(+id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studentService.remove(+id);
  }
}
