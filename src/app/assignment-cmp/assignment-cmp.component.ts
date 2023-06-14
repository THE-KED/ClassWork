import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../Models/Assignment';
import { AssignmentServiceService } from '../service/assignment.service.service';

@Component({
  selector: 'app-assignment-cmp',
  templateUrl: './assignment-cmp.component.html',
  styleUrls: ['./assignment-cmp.component.scss'],
})
export class AssignmentCmpComponent  implements OnInit {

  ClasseName:string;

  @Input("Assignment")
  assignment!:Assignment;

  file!:File;
  constructor(private assignmentServ:AssignmentServiceService) {

    this.ClasseName="BASE DE DONNEES DEVOIR 2"
   }

   isModalOpen = false;

   setOpen(isOpen: boolean) {
     this.isModalOpen = isOpen;
    }
  ngOnInit() {}

  send() {
    if (this.file!=null){
      this.assignmentServ.Send(this.file,this.assignment.getId());
    }
  }

}
