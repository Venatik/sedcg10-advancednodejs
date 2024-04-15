import { AcademyService } from './academy.service';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';
import { Academy } from './entities/academy.entity';
export declare class AcademyController {
    private readonly academyService;
    constructor(academyService: AcademyService);
    findAll(): Promise<Academy[]>;
    findOne(id: string): Promise<Academy>;
    create(createAcademyDto: CreateAcademyDto): Promise<Academy>;
    update(id: string, updateAcademyDto: UpdateAcademyDto): Promise<Academy>;
    remove(id: string): Promise<void>;
}
