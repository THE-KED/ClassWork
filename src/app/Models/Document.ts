import { Assignment } from "./Assignment";
import { Classe } from "./Classe";

export class Document{


    private id!:number;
    private docLink!:string;
    private instructions!:string;
    private classe!:Classe;
    private assignment!:Assignment;

    constructor(){

    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getDocLink(): string {
        return this.docLink;
    }

    public setDocLink(docLink: string): void {
        this.docLink = docLink;
    }

    public getInstructions(): string {
        return this.instructions;
    }

    public setInstructions(instructions: string): void {
        this.instructions = instructions;
    }

    public getClasse(): Classe {
        return this.classe;
    }

    public setClasse(classe: Classe): void {
        this.classe = classe;
    }

    public getAssignment(): Assignment {
        return this.assignment;
    }

    public setAssignment(assignment: Assignment): void {
        this.assignment = assignment;
    }

}