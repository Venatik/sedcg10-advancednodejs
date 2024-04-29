import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  UseGuards,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { AcademyService } from './academy.service';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';
import { Academy } from './entities/academy.entity';
import { Response } from 'express';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/util/role.enum';
import { TrimStringsPipe } from 'src/pipes/trim-string.pipe';
import { AppendCurrencyInterceptor } from 'src/interceptors/append-currency.interceptor';

@UseGuards(JwtAuthGuard, RolesGuard)
@UseInterceptors(AppendCurrencyInterceptor)
@ApiTags('academies')
@ApiBearerAuth()
@Controller('academy')
export class AcademyController {
  constructor(private readonly academyService: AcademyService) {}

  @ApiOperation({ summary: 'Retrieves all academies.' })
  @ApiOkResponse({
    type: [Academy],
    description: 'All academies retrieved successfully.',
  })
  @Get()
  findAll(): Promise<Academy[]> {
    return this.academyService.findAll();
  }

  @ApiOperation({ summary: 'Retrieves an academy by ID.' })
  @ApiOkResponse({
    type: Academy,
    description: 'Academy retrieved successfully.',
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Academy> {
    return this.academyService.findOne(id); // converts number-like string into number
  }

  @ApiOperation({ summary: 'Retrieves an academy by name.' })
  @ApiOkResponse({
    type: Academy,
    description: 'Academy retrieved successfully.',
  })
  @Get('/name/:name')
  async getByName(@Param('name') name: string) {
    return await this.academyService.findByName(name);
  }

  @ApiOperation({ summary: 'Creates an academy.' })
  @ApiCreatedResponse({
    type: Academy,
    description: 'Academy created successfully.',
  })
  @Post()
  @Roles(Role.Admin)
  async create(
    @Body(new TrimStringsPipe()) createAcademyDto: CreateAcademyDto,
  ): Promise<Academy> {
    return await this.academyService.create(createAcademyDto);
  }

  @ApiOperation({ summary: 'Updates an academy by ID.' })
  @ApiOkResponse({
    type: Academy,
    description: 'Academy updated successfully.',
  })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAcademyDto: UpdateAcademyDto,
  ) {
    return await this.academyService.update(id, updateAcademyDto);
  }

  @ApiOperation({ summary: 'Deletes an academy by ID.' })
  @ApiOkResponse({
    type: Academy,
    description: 'Academy deleted successfully.',
  })
  @Delete(':id')
  @Roles(Role.Admin)
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.academyService.remove(+id);
      res.status(HttpStatus.OK).json({
        status: 'success',
        message: 'Academy successfully deleted',
      });
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND).json({
        status: 'error',
        message: 'Failed to remove academy',
      });
    }
  }
}
