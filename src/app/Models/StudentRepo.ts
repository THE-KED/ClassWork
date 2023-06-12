import { ClasseRepo } from "./ClasseRepo";
import { CopieRepo } from "./CopieRepo";
import { SubmissionRepo } from "./SubmissionRepo";

export class StudentRepo{


    id!:number;
    registrationNumber!:string;
    firstName!: string;
    lastName!:string;
    email!:string;
    password!:string;
    phone!:string;
    role!:string;
    copies!:CopieRepo[];
    submissions!:SubmissionRepo[];
    classes!:ClasseRepo[];

    constructor(){
        this.copies=[];
    }


}