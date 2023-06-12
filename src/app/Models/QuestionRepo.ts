import { QuestionnaireRepo } from "./QuestionnaireRepo";

export class QuestionRepo{

    id!:number;
    statement!:string;
    choices:Array<string>=[];
    duration!:number;
    answer:Array<string>=[];
    questionnaire!:QuestionnaireRepo;


    constructor(){
        this.choices=[];        
    }

}