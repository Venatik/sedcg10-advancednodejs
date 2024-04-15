import { Repository } from 'typeorm';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';
import { Academy } from './entities/academy.entity';
export declare class AcademyService {
    private academyRepository;
    constructor(academyRepository: Repository<Academy>);
    findAll(): Promise<Academy[]>;
    findOne(id: number): Promise<Academy>;
    create(createAcademyDto: CreateAcademyDto): Promise<Academy>;
    update(id: number, updateAcademyDto: UpdateAcademyDto): Promise<Academy>;
    remove(id: number): Promise<void>;
}
