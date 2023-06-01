import { Component, Input, OnInit } from '@angular/core';
import { Evaluation } from '../Models/Evaluation';

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

  constructor() { }

  ngOnInit() {
    console.log("index = "+this.index);
    
  }

}
