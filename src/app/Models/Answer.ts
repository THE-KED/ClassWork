export class Answer {


    private id!:number;
    private values:Array<string>;

    constructor(){

        this.id=0;
        this.values=[];
    }

    public getId() : number {
        return this.id;
    }
    public getValue():Array<string>{
        return this.values;
    }

}