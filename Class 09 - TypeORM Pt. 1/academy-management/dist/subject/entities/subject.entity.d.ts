import { Academy } from 'src/academy/entities/academy.entity';
export declare class Subject {
    id: number;
    name: string;
    numberOfClasses: number;
    difficulty: string;
    academy: Academy;
    academyId: number;
}
