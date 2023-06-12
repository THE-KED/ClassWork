import { Assignment } from "./Assignment";
import { Student } from "./Student";

export class CopieRepo{

    id!:number;
    linkSent!:string;
    linkCorrected!:string;
    dateSent!:Date;
    assignment!:Assignment;
    student!:Student;
}