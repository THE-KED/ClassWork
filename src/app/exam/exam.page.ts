import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../Models/Questionnaire';
import { EvaluationServiceService } from '../service/evaluation.service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluation } from '../Models/Evaluation';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  questions!:Questionnaire
  eval!:Evaluation[]
  indexQ:number;
  length:number;
  index!:number;
  constructor(private evalserv:EvaluationServiceService,
    private route:ActivatedRoute,private router:Router) {
      this.indexQ=0;
      this.length=0;
     }

  ngOnInit() {
    let index= this.route.snapshot.paramMap.get("index");
    this.index = +index!;
    this.evalserv.evalSubject.subscribe((data:Evaluation[])=>{
    
      this.eval=data;

    });
    this.evalserv.refrech();

    this.questions = this.eval[this.index].getQuestionnaire();
    console.log(this.questions);

    this.length = this.questions.getQuestions().length;

    this.evalserv.initExam(this.questions);
  }

  progressBart():number{

    return (this.indexQ+1)/this.length;

  }
  next(){
    if(this.indexQ<this.length-1){
      this.indexQ++;
      this.evalserv.upIndex();
      
    }
  

    console.log("indexQ = "+this.indexQ);
    
  }
  back(){
    if(this.indexQ>0){
      this.indexQ--;
      this.evalserv.downIndex();
    }


    console.log("indexQ = "+this.indexQ);

  }


}
