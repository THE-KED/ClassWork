export class User{


    private id:number;
    private registrationNumber:string;
    private firstName: string;
    private lastName:string;
    private email:string;
    private password:string;
    private phone:string;


    constructor(
        id:number , registrationNumber:string,
        firstName:string , lastName:string,
        email:string , password:string,
        phone:string
    ){
        
        this.id=id;
        this.registrationNumber=registrationNumber;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.phone=phone;

    }

}