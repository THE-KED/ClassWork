import { Proposition } from "./Proposition";
import { PropositionRepo } from "./PropositionRepo";
import { Questionnaire } from "./Questionnaire";
import { QuestionnaireRepo } from "./QuestionnaireRepo";
import { Student } from "./Student";
import { StudentRepo } from "./StudentRepo";

export class SubmissionRepo {

    id!:number;
    student!:StudentRepo;
    propositions:PropositionRepo[]=[];
    questionnaire!:QuestionnaireRepo;
    mark!:number;
    time!:Date;

    constructor(){
    }


}