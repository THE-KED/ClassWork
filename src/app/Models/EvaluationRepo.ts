import { Classe } from "./Classe";
import { EvalType } from "./Enumerations/EvaluationType";
import { Questionnaire } from "./Questionnaire";

export class EvaluationRepo {

    id!:number;
    Title!:string;
    instructions!:string;
    duree!:Date;
    type!:EvalType;
    StartDate!:Date
    expiration!:Date;
    Questionnaire!:Questionnaire;
    classe!:Classe;





    constructor(){
        this.type=EvalType.Test;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.Title;
    }

    public setTitle(Title: string): void {
        this.Title = Title;
    }

    public getInstructions(): string {
        return this.instructions;
    }

    public setInstructions(instructions: string): void {
        this.instructions = instructions;
    }

    public getDuree(): Date {
        return this.duree;
    }

    public setDuree(duree: Date): void {
        this.duree = duree;
    }

    public getStartDate(): Date {
        return this.StartDate;
    }

    public setStartDate(StartDate: Date): void {
        this.StartDate = StartDate;
    }

    public getExpiration(): Date {
        return this.expiration;
    }

    public setExpiration(expiration: Date): void {
        this.expiration = expiration;
    }

    public getQuestionnaire(): Questionnaire {
        return this.Questionnaire;
    }

    public setQuestionnaire(Questionnaire: Questionnaire): void {
        this.Questionnaire = Questionnaire;
    }
    public getClasse(): Classe {
        return this.classe;
    }

    public setClasse(classe: Classe): void {
        this.classe = classe;
    }

    public getType(): EvalType {
        return this.type;
    }

    public setType(type: EvalType): void {
        this.type = type;
    }

}