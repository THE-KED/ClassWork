import { Assignment } from "./Assignment";
import { ClasseRepo } from "./ClasseRepo";
import { Evaluation } from "./Evaluation";
import { Serializable } from "./Interfaces/Serializable";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class Classe implements Serializable<ClasseRepo,Classe>{

    private id!:number;
    private name!:string;
    private teacher!:Teacher;
    private description!:string;
    private students:Array<Student> = [];
    private evaluations:Array<Evaluation> = [];
    private assignments:Array<Assignment> = [];

    constructor(){

    }
    build(data: ClasseRepo): Classe {
        try{
            this.setId(data.id);

        }catch{

        }
        try{
            this.setName(data.name);

        }catch{

        }
        try{
            this.setTeacher(new Teacher().build(data.teacher));

        }catch{
            console.log("impossible de parser Classe.teacher");

        }

        try{
            for(let i=0;i<data.students.length;i++)
            this.students.push(new Student().build(data.students[i]));
        }catch{
            console.log("impossible de parser Classe.Students");

        }

        try{
            for(let i=0;i<data.evaluations.length ;i++)
            this.evaluations.push(new Evaluation().build(data.evaluations[i]));
        }catch{
            console.log("impossible de parser Classe.evaluations");

        }

        try{
            for(let i=0; data.assignments.length ;i++)
            this.assignments.push(new Assignment().build(data.assignments[i]));
        }catch{
            console.log("impossible de parser Classes.assignments");

        }

        return this;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getTeacher(): Teacher {
        return this.teacher;
    }

    public setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
    }

    public getStudents(): Array<Student> {
        return this.students;
    }

    public setStudents(students: Array<Student>): void {
        this.students = students;
    }

    public getEvaluations(): Array<Evaluation> {
        return this.evaluations;
    }

    public setEvaluations(evaluations: Array<Evaluation>): void {
        this.evaluations = evaluations;
    }

    public getAssignments(): Array<Assignment> {
        return this.assignments;
    }

    public setAssignments(assignments: Array<Assignment>): void {
        this.assignments = assignments;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }


}
