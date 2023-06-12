import { Serializable } from "./Interfaces/Serializable";
import { PropositionRepo } from "./PropositionRepo";

export class Proposition implements Serializable<PropositionRepo,Proposition>{
    
    private id!:number;
    private reponse!:boolean[];


    constructor(){
        this.reponse=[];
    }
    build(data: PropositionRepo): Proposition {

        this.id=data.id;
        // for(let i=0;i<data.values.length;i++){
        //     temp=data.submission.questionnaire.questions;
        //     if(data.values[i]==data.submission.questionnaire.questions)
        // }

        return this;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getReponse(): boolean[] {
        return this.reponse;
    }

    public setReponse(reponse: boolean[]): void {
        this.reponse = reponse;
    }



}