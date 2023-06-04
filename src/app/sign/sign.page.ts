import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {
  Matricule:string;
  Pass:string;
  Name:string;

  isValid:boolean;
  Email: string;

  constructor(private authServ:AuthentificationService) {
    this.Matricule="";
    this.Pass="";
    this.Name="";
    this.Email="";
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

    this.authServ.sign(this.Name,this.Email,this.Matricule,this.Pass);
  }
}
