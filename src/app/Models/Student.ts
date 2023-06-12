import { Classe } from "./Classe";
import { Copie } from "./Copie";
import { Serializable } from "./Interfaces/Serializable";
import { StudentRepo } from "./StudentRepo";
import { Submission } from "./Submission";
import { User } from "./User";

export class Student extends User implements Serializable<StudentRepo,Student>{

    private copies:Copie[] = [];
    private submissions:Submission[]=[];
    private classes:Classe[]=[];

    public getSubmissions(): Submission[] {
        return this.submissions;
    }

    public setSubmissions(submissions: Submission[]): void {
        this.submissions = submissions;
    }

    public getClasses(): Classe[] {
        return this.classes;
    }

    public setClasses(classes: Classe[]): void {
        this.classes = classes;
    }



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
      try{
        for(let i=0;i<data.submissions.length;i++){
            this.submissions.push((new Submission()).build(data.submissions[i]));
        }
      }catch{
        
      } 
      try{
        for(let i=0;i<data.classes.length;i++){
            this.classes.push((new Classe()).build(data.classes[i]));
        }
      }catch{
        console.log("impossible de parser Student.classes");
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