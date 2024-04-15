import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    findAll(): Promise<Subject[]>;
    findOne(id: string): Promise<Subject>;
    create(createSubjectDto: CreateSubjectDto): Promise<Subject>;
    update(id: string, updateSubjectDto: UpdateSubjectDto): Promise<Subject>;
    remove(id: string): Promise<void>;
}
