import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { Question } from '../Models/Question';
import { EvaluationServiceService } from '../service/evaluation.service.service';
import { EvalType } from '../Models/Enumerations/EvaluationType';

@Component({
  selector: 'app-question',
  templateUrl: './question.view.component.html',
  styleUrls: ['./question.view.component.scss'],
})
export class QuestionViewComponent  implements OnInit , OnChanges{



  @Input("question")
  question!:Question;
  @Input("type")
  evalType!:EvalType;
  @Input("index")
  index!:number;
  @Input("indexQ")
  indexQ!:number;

  Time!:Date;
  constructor(private evalServ:EvaluationServiceService) {


   }
  ngOnChanges(changes: SimpleChanges): void {

    if(this.evalType!=EvalType.Test){
      if(this.question.getValide()){
        this.Time = new Date(this.question.getDuration());
  
        console.log("duree : "+this.question.getDuration())
        if(this.question.getDuration()!=null){
          const Timer = interval(1000).subscribe(()=>{
    
            let temp = this.question.getDuration();
            this.question.setDuration(temp-1000);
            
            if(this.question.getDuration()<=0){
              Timer.unsubscribe();
              this.evalServ.changeValid(this.index,this.indexQ,false);
            }
          });
        }
      }
    }
   
  }

  ngOnInit() {


    if(this.question.getValide()){
      this.Time = new Date(this.question.getDuration());

      console.log("duree : "+this.question.getDuration())
      if(this.evalType!=EvalType.Test){
        if(this.question.getDuration()!=null){
          const Timer = interval(1000).subscribe(()=>{
    
            let temp = this.question.getDuration();
            this.question.setDuration(temp-1000);
            
            if(this.question.getDuration()<=0){
              Timer.unsubscribe();
              this.evalServ.changeValid(this.index,this.indexQ,false);
            }
          });
        }
      }
      }


  }

}
