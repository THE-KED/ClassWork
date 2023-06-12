import { AssignmentRepo } from "./AssignmentRepo";
import { Serializable } from "./Interfaces/Serializable";

export class Assignment implements Serializable<AssignmentRepo,Assignment>{
   
    build(data: AssignmentRepo): Assignment {
        return this;
    }
    
}