import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from '../Models/Question';
import { EvaluationServiceService } from '../service/evaluation.service.service';
import { Proposition } from '../Models/Proposition';

@Component({
  selector: 'app-response-cmp',
  templateUrl: './response-cmp.component.html',
  styleUrls: ['./response-cmp.component.scss'],
})
export class ResponseCmpComponent  implements OnInit,OnChanges{


  @Input("question")
  question!:Question;

  @Input("indexE")
  indexE!:number;
  @Input("indexQ")
  indexQ!:number;

  prop:Proposition;
  index!:number
  val:boolean[]
  response:string[]=[];

  constructor(private EvalServ:EvaluationServiceService) { 
    this.prop=new Proposition();
    this.val=[];
  }

  ngOnInit() {

 

    for(let i=0; i<this.question.getChoices().length; i++){
      this.val.push(false);
 

    }

    console.log(this.response)

    this.EvalServ.indexSubject.subscribe((data:number)=>{
      this.index=data;
    });

    this.EvalServ.refrechIndex();


    console.log("reponse indexQ = "+this.index);


    
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.val=[];

    console.log("change");

    for(let i=0; i<this.question.getChoices().length; i++){
      this.val.push(false);
    }

    this.EvalServ.indexSubject.subscribe((data:number)=>{
      this.index=data;
    });

    this.EvalServ.refrechIndex();

    console.log(this.val);
    console.log("reponse indexQ = "+this.index);
    
  }

  public valider(){

    console.log("val : "+this.val);
    console.log("Proposition : "+this.prop);
    
  }
}
