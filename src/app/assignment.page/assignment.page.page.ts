import { Component, OnInit } from '@angular/core';
import { AssignmentServiceService } from '../service/assignment.service.service';
import { Assignment } from '../Models/Assignment';

@Component({
  selector: 'app-assignment.page',
  templateUrl: './assignment.page.page.html',
  styleUrls: ['./assignment.page.page.scss'],
})
export class AssignmentPagePage implements OnInit {


  assignments!:Assignment[];
  constructor(private assignmentServ:AssignmentServiceService) { }

  ngOnInit() {

    this.assignmentServ.assigmentSub.subscribe(data=>{
      this.assignments=data;
    });

    this.assignmentServ.emite();
  }

}
