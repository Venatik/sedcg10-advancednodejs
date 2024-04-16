import { Student } from 'src/student/entities/student.entity';
import { Subject } from 'src/subject/entities/subject.entity';
export declare class Academy {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    price: number;
    subjects: Subject[];
    students: Student[];
}
