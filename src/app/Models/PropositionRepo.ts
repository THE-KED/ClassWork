export class PropositionRepo{
    
    id!:number;
    reponse!:boolean[];


    constructor(){
        this.reponse=[];
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getReponse(): boolean[] {
        return this.reponse;
    }

    public setReponse(reponse: boolean[]): void {
        this.reponse = reponse;
    }



}