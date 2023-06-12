import { Serializable } from "./Interfaces/Serializable";
import { Question } from "./Question";
import { QuestionnaireRepo } from "./QuestionnaireRepo";

export class Questionnaire implements Serializable<QuestionnaireRepo,Questionnaire> {

    private id!:number;
    private duration!:number;
    private questions:Array<Question>=[];

    public getQuestions(): Array<Question> {
        return this.questions;
    }

    public setQuestions(questions: Array<Question>): void {
        this.questions = questions;
    }


    constructor(){

    }
    build(data: QuestionnaireRepo): Questionnaire {
        this.id=data.id;
        this.duration= data.duration;
        try{
            for(let i=0;i<data.questions.length;i++){
                this.questions.push(new Question().build(data.questions[i]));
            }
        }catch{}

        return this
    }

    public getId() : number {
        return this.id;
    }
    public getDuration() : number{
        return this.duration;
    }
}