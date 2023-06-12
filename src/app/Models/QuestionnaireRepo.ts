import { Evaluation } from "./Evaluation";
import { Question } from "./Question";
import { QuestionRepo } from "./QuestionRepo";
import { Submission } from "./Submission";
import { SubmissionRepo } from "./SubmissionRepo";

export class QuestionnaireRepo{

    id!:number;
    duration!:number;
    questions!:Array<QuestionRepo>;
    evaluation!:Evaluation;
    submissions:Array<SubmissionRepo>=[];


    constructor(){

    }

    public getId() : number {
        return this.id;
    }
    public getDuration() : number{
        return this.duration;
    }
}