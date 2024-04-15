import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';
export declare class SubjectService {
    private subjectRepository;
    constructor(subjectRepository: Repository<Subject>);
    findAll(): Promise<Subject[]>;
    findOne(id: number): Promise<Subject>;
    create(createSubjectDto: CreateSubjectDto): Promise<Subject>;
    update(id: number, updateSubjectDto: UpdateSubjectDto): Promise<Subject>;
    remove(id: number): Promise<void>;
}
