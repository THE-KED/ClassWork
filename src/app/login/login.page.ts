import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Matricule:string;
  Pass:string;

  isValid:boolean;

  constructor(private AuthService:AuthentificationService) {
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

    this.AuthService.Login(this.Matricule,this.Pass);

    console.log("Mat: "+this.Matricule)
    console.log("Pass: "+this.Pass);
  }


}
