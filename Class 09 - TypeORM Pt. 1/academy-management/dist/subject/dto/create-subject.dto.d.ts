import { Difficulty } from '../../utils/difficulty.enum';
export declare class CreateSubjectDto {
    readonly name: string;
    readonly numberOfClasses: number;
    readonly difficulty: Difficulty;
    readonly academyId: number;
    readonly trainerId: string;
}
