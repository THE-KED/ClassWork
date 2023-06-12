import { Classe } from "./Classe";
import { ClasseRepo } from "./ClasseRepo";
import { EvalType } from "./Enumerations/EvaluationType";
import { Questionnaire } from "./Questionnaire";
import { QuestionnaireRepo } from "./QuestionnaireRepo";

export class EvaluationRepo {

    id!:number;
    title!:string;
    instructions!:string;
    time!:Date;
    status!:string;
    expiration!:Date;
    questionnaire!:QuestionnaireRepo;
    classe!:ClasseRepo;

    constructor(){
    }

}