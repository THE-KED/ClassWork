import { Component, OnInit } from '@angular/core';
import { EvaluationServiceService } from '../service/evaluation.service.service';
import { Evaluation } from '../Models/Evaluation';

@Component({
  selector: 'app-evaluations-display',
  templateUrl: './evaluations-display.page.html',
  styleUrls: ['./evaluations-display.page.scss'],
})
export class EvaluationsDisplayPage implements OnInit {


  Evals!:Evaluation[];

  constructor(private evalServ:EvaluationServiceService) {


   }

  ngOnInit() {
    this.evalServ.loadMyExam();
    this.evalServ.evalSubject.subscribe((data:Evaluation[])=>{

      this.Evals=data;
    });
    this.evalServ.refrech();
  }

}
