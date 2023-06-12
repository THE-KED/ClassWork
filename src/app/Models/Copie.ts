import { CopieRepo } from "./CopieRepo";
import { Serializable } from "./Interfaces/Serializable";

export class Copie implements Serializable<CopieRepo,Copie>{ 
   
    constructor(){

    }
   
    build(data: CopieRepo): Copie {
        return this;
    }
    
}