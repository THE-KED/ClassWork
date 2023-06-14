import { Component, OnInit } from '@angular/core';
import { ClasseServiceService } from '../service/classe.service.service';
import { EvaluationServiceService } from '../service/evaluation.service.service';
import { AssignmentServiceService } from '../service/assignment.service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private classeServ:ClasseServiceService,private examServ:EvaluationServiceService,
    private AssignmentServ:AssignmentServiceService) {}

  ngOnInit(): void {
    this.classeServ.loadMyClass().then(()=>{
      console.log("load My exams");
      this.examServ.loadMyExam();
      this.AssignmentServ.loadMyAssignment();
    });
  }

}
