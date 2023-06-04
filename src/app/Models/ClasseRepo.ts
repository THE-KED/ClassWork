import { Assignment } from "./Assignment";
import { Evaluation } from "./Evaluation";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class ClasseRepo {

    id!:number;
    name!:string;
    teacher!:Teacher;
    students!:Array<Student>;
    evaluations!:Array<Evaluation>;
    assignments!:Array<Assignment>;

    constructor(){

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



}
