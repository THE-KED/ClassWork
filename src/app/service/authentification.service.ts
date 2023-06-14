import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ToastBuilder } from '../Utils/ToastBuilder';
import { Student } from '../Models/Student';
import { StudentRepo } from '../Models/StudentRepo';
import { Classe } from '../Models/Classe';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  public currentStudent!:Student;
  host:string = "http://localhost:8080/api/v1";
  isAuth:boolean=false;
  loading = this.loadingCtrl.create({
      message: 'Connection...',
  });


  constructor( private http:HttpClient,
                private toastCtrl:ToastController,
                private navCtrl:NavController,
                private loadingCtrl:LoadingController,
              ) { }



  async showToast(nom:string){
    let toastBuilder: ToastBuilder;
    toastBuilder = new ToastBuilder(this.toastCtrl)

    toastBuilder.bluidLoginSuccessToast(nom);
  }

  async sign(Nom:string ,email:string, Mat:string , Pass:string){


    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    }
    const options = {  headers:headers};
    let KED:Student = new Student();
    KED.setEmail(email);
    KED.setFirstName("ERIC");
    KED.setLastName(Nom);
    KED.setRegistrationNumber(Mat);
    KED.setPassword(Pass);

    (await this.loading).present();

    this.http.post(this.host+"/student",KED).subscribe(
      response=>
      {
        console.log(response)
        const student :StudentRepo = response as StudentRepo;
        this.currentStudent= (new Student()).build(student);

        console.log("Email :"+this.currentStudent.getEmail());
        console.log("id"+this.currentStudent.getId());
      },
  
      async (err)=> {
        this.isAuth=false;
        (await this.loading).dismiss();
        console.log("ERROR");
      },
      async ()=> {
        this.isAuth=true;
        (await this.loading).dismiss();
        this.navCtrl.navigateForward("home").then(()=>{
        this.showToast(KED.getLastName())});
      });

  }

  async Login(Email:string , Pass:string){


    console.log("Basic "+window.btoa(Email+':'+Pass))

    let header = new HttpHeaders({

      Authorization:'Basic '+btoa(Email+':'+Pass),
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',  
    });
    console.log(header);

    (await this.loading).present();
    this.http.post(this.host+"/student/loginRegNumber",{"regNumber":Email,"password":Pass}).subscribe((data)=>{

      console.log(data);
      const jsonObj= JSON.stringify(data);
      const obj=JSON.parse(jsonObj);
      const classes = obj.classes;
      this.currentStudent= Object.assign(new Student(),obj);
      this.currentStudent.setClasses(Object.assign(new Array<Classe>(),classes));
      console.log("name : "+this.currentStudent.getFirstName());
      console.log(this.currentStudent);

    },async (err)=>{
      (await this.loading).dismiss();
      this.loading = this.loadingCtrl.create({
        message: 'Connection...',
     });
     this.isAuth=false;
      console.log("ERROR");
      console.log(err);
    },async ()=>{
      console.log(this.currentStudent.getClasses());
      this.isAuth=true;
      (await this.loading).dismiss();
      this.navCtrl.setDirection('root')
      this.navCtrl.navigateForward("home").then(()=>{
        this.showToast(this.currentStudent.getFirstName());
      });
    });

  }
}
