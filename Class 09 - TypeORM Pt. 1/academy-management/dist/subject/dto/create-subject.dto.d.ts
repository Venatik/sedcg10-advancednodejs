import { Difficulty } from 'src/util/difficulty.enum';
export declare class CreateSubjectDto {
    readonly name: string;
    readonly numberOfClasses: number;
    readonly difficulty: Difficulty;
    readonly academyId: number;
}
