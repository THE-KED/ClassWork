export class User{


    private id!:number;
    private registrationNumber!:string;
    private firstName!: string;
    private lastName!:string;
    private email!:string;
    private password!:string;
    private phone!:string;
    private role!:string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getRegistrationNumber(): string {
        return this.registrationNumber;
    }

    public setRegistrationNumber(registrationNumber: string): void {
        this.registrationNumber = registrationNumber;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }



    constructor(

    ){

    }

}