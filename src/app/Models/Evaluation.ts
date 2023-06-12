import { Classe } from "./Classe";
import { EvalType } from "./Enumerations/EvaluationType";
import { EvaluationRepo } from "./EvaluationRepo";
import { Serializable } from "./Interfaces/Serializable";
import { Questionnaire } from "./Questionnaire";

export class Evaluation implements Serializable<EvaluationRepo,Evaluation>{

    private id!:number;
    private title!:string;
    private instructions!:string;
    private duree!:Date;
    private type!:EvalType;
    private time!:Date
    private expiration!:Date;
    private Questionnaire!:Questionnaire;
    private classe!:Classe;
    private correcetion:boolean=false;


    constructor(){
        this.type=EvalType.Test;
    }

    build(data: EvaluationRepo): Evaluation {
        this.id=data.id;
        this.title=data.title;
        this.time=data.time;
        this.expiration=data.expiration;
        this.classe=new Classe().build(data.classe);
        this.Questionnaire=new Questionnaire().build(data.questionnaire); 

        return this;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(Title: string): void {
        this.title = Title;
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
        return this.time;
    }

    public setStartDate(StartDate: Date): void {
        this.time = StartDate;
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

    public isCorrecetion(): boolean {
        return this.correcetion;
    }

    public setCorrecetion(correcetion: boolean): void {
        this.correcetion = correcetion;
    }
}