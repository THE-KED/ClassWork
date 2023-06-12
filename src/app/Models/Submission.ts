import { Serializable } from "./Interfaces/Serializable";
import { Proposition } from "./Proposition";
import { Questionnaire } from "./Questionnaire";
import { Student } from "./Student";
import { SubmissionRepo } from "./SubmissionRepo";

export class Submission implements Serializable<SubmissionRepo,Submission>{

    private id!:number;
    private student!:Student;
    private proposition!:Array<Proposition>;
    private questionnaire!:Questionnaire;


    constructor(){
        this.proposition=[];
    }
    build(data: SubmissionRepo): Submission {
        this.id= data.id;

        try {
            this.student=new Student().build(data.student);
        }catch{

        }
        try {
            for(let i=0;1<data.propositions.length;i++){
                this.proposition.push(new Proposition().build(data.propositions[i]));
            }
        }catch{

        }

        try {
            this.questionnaire=new Questionnaire().build(data.questionnaire);
        }catch{

        }


        return this;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getStudent(): Student {
        return this.student;
    }

    public setStudent(student: Student): void {
        this.student = student;
    }

    public getProposition(): Proposition[] {
        return this.proposition;
    }

    public setProposition(proposition: Proposition[]): void {
        this.proposition = proposition;
    }

    public getQuestionnaire(): Questionnaire {
        return this.questionnaire;
    }

    public setQuestionnaire(questionnaire: Questionnaire): void {
        this.questionnaire = questionnaire;
    }


}