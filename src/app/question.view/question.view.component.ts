import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Question } from '../Models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.view.component.html',
  styleUrls: ['./question.view.component.scss'],
})
export class QuestionViewComponent  implements OnInit {



  @Input("question")
  question!:Question;

  Time!:Date;

  constructor() {


   }

  ngOnInit() {

    this.Time = new Date(this.question.getDuration());

    console.log("duree : "+this.question.getDuration())
    if(this.question.getDuration()!=null){
      const Timer = interval(1000).subscribe(()=>{

        let temp = this.question.getDuration();
        this.question.setDuration(temp-1000);
  
      });
    }

  }

}
