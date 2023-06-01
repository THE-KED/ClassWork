import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {
  Matricule:string;
  Pass:string;

  isValid:boolean;

  constructor() {
    this.Matricule="";
    this.Pass=""
    this.isValid=false;
   }

  ngOnInit() {
  }


  check(){
    if(this.Matricule!="" && this.Pass!="")
      this.isValid=true;
    else
      this.isValid=false;
  }


  send(){
    console.log("Mat: "+this.Matricule)
    console.log("Pass: "+this.Pass);
  }
}
