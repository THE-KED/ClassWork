import { Classe } from "./Classe";
import { Serializable } from "./Interfaces/Serializable";
import { TeacherRepo } from "./TeacherRepo";
import { User } from "./User";

export class Teacher extends User implements Serializable<TeacherRepo,Teacher> {


    private classe:Array<Classe>=[];

    public getClasse(): Classe[] {
        return this.classe;
    }

    public setClasse(classe: Classe[]): void {
        this.classe = classe;
    }

    build(data: TeacherRepo): Teacher {

        try{
            this.setId(data.id);

        }catch{

        }

        try{
            this.setFirstName(data.firstName);

        }catch{
            
        }
        try{    
            this.setLastName(data.lastName);

        }catch{
            
        }

        return this;
    }
}