import { Proposition } from "./Proposition";
import { Questionnaire } from "./Questionnaire";
import { Student } from "./Stundent";

export class Submission {

    private id!:number;
    private student!:Student;
    private proposition!:Array<Proposition>;
    private questionnaire!:Questionnaire;


    constructor(){
        this.proposition=[];
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getStudent(): Student {
        return this.student;
    }

    public setStudent(student: Student): void {
        this.student = student;
    }

    public getProposition(): Proposition[] {
        return this.proposition;
    }

    public setProposition(proposition: Proposition[]): void {
        this.proposition = proposition;
    }

    public getQuestionnaire(): Questionnaire {
        return this.questionnaire;
    }

    public setQuestionnaire(questionnaire: Questionnaire): void {
        this.questionnaire = questionnaire;
    }


}