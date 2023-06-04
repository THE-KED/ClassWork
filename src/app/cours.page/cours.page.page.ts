import { Component, OnInit } from '@angular/core';
import { ClasseServiceService } from '../service/classe.service.service';
import { Classe } from '../Models/Classe';

@Component({
  selector: 'app-cours.page',
  templateUrl: './cours.page.page.html',
  styleUrls: ['./cours.page.page.scss'],
})
export class CoursPagePage implements OnInit {

  isOpend=false
  isAlertOpen = false;
  public alertButtons = ['OK'];
  public header ={
    text:"Base de donnee",
  };

  myClasses:Classe[]=[];
  constructor(private classeServ:ClasseServiceService) { }

  ngOnInit() {

    this.classeServ.ClasseSubject.subscribe((data)=>{
      this.myClasses = data;
    })
    this.classeServ.emitClasse();

  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  
}
