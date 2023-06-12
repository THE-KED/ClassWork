import { Classe } from "./Classe";
import { Copie } from "./Copie";

export class AssignmentRepo{
    id!:number;
    description!:string;
    title!:string;
    fileType!:string;
    dateGiven!:Date;
    expiratonDate!:Date;
    status!:string;
    copies:Copie[]=[];
    classe!:Classe;
}