import { Component, Input, OnInit } from '@angular/core';
import { Evaluation } from '../Models/Evaluation';
import { formatDate } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-evaluation-card',
  templateUrl: './evaluation-card.component.html',
  styleUrls: ['./evaluation-card.component.scss'],
})
export class EvaluationCardComponent  implements OnInit {


  @Input("Evaluation")
  evaluation!:Evaluation
  @Input("index")
  index!:number;
  date = new Date ();
  isValid:boolean=false;
  constructor() { }

  ngOnInit() {
    console.log("index = "+this.index);
    
    interval(1000).subscribe(()=>{
      if(this.evaluation.getStartDate().valueOf() <= Date.now()){
        this.isValid=true;
        if(this.evaluation.getExpiration().valueOf()<= Date.now())
          this.isValid=false;
      }

    });

  }

  btnActive():boolean {

    if(this.evaluation.getStartDate().valueOf() <= Date.now()){
      this.isValid=true;

      return true;
    }

    return false;
  }

}
