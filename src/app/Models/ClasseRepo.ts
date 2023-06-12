import { AssignmentRepo } from "./AssignmentRepo";
import { EvaluationRepo } from "./EvaluationRepo";
import { StudentRepo } from "./StudentRepo";
import { TeacherRepo } from "./TeacherRepo";

export class ClasseRepo {

    id!:number;
    name!:string;
    teacher!:TeacherRepo;
    students!:StudentRepo[];
    evaluations!:EvaluationRepo[];
    assignments!:AssignmentRepo[];

    constructor(){

    }

}
