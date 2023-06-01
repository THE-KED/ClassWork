import { Answer } from "./Answer";
import { Questionnaire } from "./Questionnaire";

export class Question{

    private id!:number;
    private statement!:string;
    private choices:Array<string>;
    private duration!:number;
    private answer!:number[];
    private questionnaire!:Questionnaire;


    constructor(){
        this.choices=[];        
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
   

}