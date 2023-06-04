import { Copie } from "./Copie";
import { CopieRepo } from "./CopieRepo";

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

    constructor(){
        this.copies=[];
    }


}