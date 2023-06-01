import { Copie } from "./Copie";
import { User } from "./User";

export class Student extends User{

    private copies!:Copie[];

    public getCopies(): Copie[] {
        return this.copies;
    }

    public setCopies(copies: Copie[]): void {
        this.copies = copies;
    }


}