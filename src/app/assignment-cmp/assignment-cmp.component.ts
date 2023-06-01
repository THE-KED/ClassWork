import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-cmp',
  templateUrl: './assignment-cmp.component.html',
  styleUrls: ['./assignment-cmp.component.scss'],
})
export class AssignmentCmpComponent  implements OnInit {

  ClasseName:string;

  constructor() {

    this.ClasseName="BASE DE DONNEES DEVOIR 2"
   }

   isModalOpen = false;

   setOpen(isOpen: boolean) {
     this.isModalOpen = isOpen;
    }
  ngOnInit() {}

}
