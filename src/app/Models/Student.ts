import { Copie } from "./Copie";
import { Serializable } from "./Interfaces/Serializable";
import { StudentRepo } from "./StudentRepo";
import { User } from "./User";

export class Student extends User implements Serializable<StudentRepo,Student>{

    private copies:Copie[] = [];


    public getCopies(): Copie[] {
        return this.copies;
    }

    public setCopies(copies: Copie[]): void {
        this.copies = copies;
    }

    build(data:StudentRepo): Student {

      try{
        for(let i=0;i<data.copies.length;i++){
            this.copies.push((new Copie()).build(data.copies[i]));
        }
      }catch{
        
      }


        this.setEmail(data.email);
        this.setFirstName(data.firstName);
        this.setId(data.id);
        this.setLastName(data.lastName);
        this.setPassword(data.password);
        this.setRegistrationNumber(data.registrationNumber)

        return this;
    }

}