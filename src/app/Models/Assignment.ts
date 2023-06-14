import { AssignmentRepo } from "./AssignmentRepo";
import { Classe } from "./Classe";
import { Document } from "./Document";
import { Serializable } from "./Interfaces/Serializable";

export class Assignment implements Serializable<AssignmentRepo,Assignment>{
   


 
    private id!:number;
    private description!:string;
    private title!:string;
    private fileType!:string;
    private dateGiven!:Date;
    private expirationDate!:Date;
    private document!:Document;
    private classe!:Classe;


    constructor(){

    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getFileType(): string {
        return this.fileType;
    }

    public setFileType(fileType: string): void {
        this.fileType = fileType;
    }

    public getDateGiven(): Date {
        return this.dateGiven;
    }

    public setDateGiven(dateGiven: Date): void {
        this.dateGiven = dateGiven;
    }

    public getExpirationDate(): Date {
        return this.expirationDate;
    }

    public setExpirationDate(expirationDate: Date): void {
        this.expirationDate = expirationDate;
    }

    public getDocument(): Document {
        return this.document;
    }

    public setDocument(document: Document): void {
        this.document = document;
    }

    public getClasse(): Classe {
        return this.classe;
    }

    public setClasse(classe: Classe): void {
        this.classe = classe;
    }




    build(data: AssignmentRepo): Assignment {
        return this;
    }


    
}