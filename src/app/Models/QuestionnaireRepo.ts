import { Question } from "./Question";

export class QuestionnaireRepo{

    id!:number;
    duration!:number;
    questions!:Array<Question>;


    public getQuestions(): Array<Question> {
        return this.questions;
    }

    public setQuestions(questions: Array<Question>): void {
        this.questions = questions;
    }


    constructor(){

    }

    public getId() : number {
        return this.id;
    }
    public getDuration() : number{
        return this.duration;
    }
}