import { Serializable } from "./Interfaces/Serializable";
import { QuestionRepo } from "./QuestionRepo";
import { Questionnaire } from "./Questionnaire";

export class Question implements Serializable<QuestionRepo,Question>{

    private id!:number;
    private statement!:string;
    private choices:Array<string>;
    private duration!:number;
    private answer:Array<number>=[];
    private questionnaire!:Questionnaire;
    private valide:boolean=true;

    constructor(){
        this.choices=[];        
    }

    build(data: QuestionRepo): Question {

        this.id=data.id;
        this.statement=data.statement;
        this.duration=data.duration;
        for(let i=0;i<this.answer.length;i++)
        this.answer.push(i);
        this.choices=data.choices;

        return this;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getStatement(): string {
        return this.statement;
    }

    public setStatement(statement: string): void {
        this.statement = statement;
    }

    public getChoices(): Array<string> {
        return this.choices;
    }

    public setChoices(choices: Array<string>): void {
        this.choices = choices;
    }

    public getDuration(): number {
        return this.duration;
    }

    public setDuration(duration: number): void {
        this.duration = duration;
    }

    public getAnswer(): number[] {
        return this.answer;
    }

    public setAnswer(answer: number[]): void {
        this.answer = answer;
    }

    public getQuestionnaire(): Questionnaire {
        return this.questionnaire;
    }

    public setQuestionnaire(questionnaire: Questionnaire): void {
        this.questionnaire = questionnaire;
    }

    public getValide(): boolean {
        return this.valide;
    }

    public setValide(valide: boolean): void {
        this.valide = valide;
    }
   

}