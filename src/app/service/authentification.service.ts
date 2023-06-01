import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { NavController, ToastController } from '@ionic/angular';
import { ToastBuilder } from '../Utils/ToastBuilder';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  User!:User;
  host:string = "http://192.168.43.152:8080/api/users";

  constructor( private http:HttpClient,
                private toastCtrl:ToastController,
                private navCtrl:NavController
    ) { 

  }

  async showToast(){
    let toastBuilder: ToastBuilder;
    toastBuilder = new ToastBuilder(this.toastCtrl)

    toastBuilder.bluidLoginSuccessToast("KED");
  
  }


  Login(Mat:string , Pass:string){


    this.navCtrl.setDirection('root')
    this.navCtrl.navigateForward("home").then(()=>{
      this.showToast();
    });
    
    this.http.get(this.host).subscribe((data)=>{
      this.User = data as User;

      console.log(this.User);
      console.log(data);

    },()=>{
      console.log("error");
    });

  }

  
}
