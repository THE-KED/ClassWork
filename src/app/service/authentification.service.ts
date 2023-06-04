import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ToastBuilder } from '../Utils/ToastBuilder';
import { Student } from '../Models/Student';
import { StudentRepo } from '../Models/StudentRepo';
import { Subject } from 'rxjs';
import { StudentToken } from '../Models/StudentToken';



const ACCESS_TOKEN_KEY = 'my-access-token';
const REFRESH_TOKEN_KEY = 'my-refresh-token';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  currentStudent!:Student;
  private token:string="eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwiaWF0IjoxNjg1ODA2NjM1LCJzY29wZSI6IlNUVURFTlQifQ.b0xgwDPC12rskj43HGidE4p5HMc24waO4IoTHJtqFwkMBs6k3IoUyrxAKfaMatRcnfMn4SPdfJDPmHgCocsKy69ngYJWgas7WhNzHh2R2GtcWnImEa7NR8c19nt_z0-9wc-A-DCuiDN6lVDRgpxqKV2R8Obs6Cz11SLa5FQxYnBZkxggDmCOLWCDk26BtdAoFq8Uhr1jalLAbFrvQO7v9tpUfTyqiGWBcJGOu4rWZ66iEgVo6XARsRiqF3FiUrdt80xjAyBU2OYonOLIy-s0w8cfXsNQFCARk1dRPQh5f57UbEwh9bxQvOyuGaKD-j4E6CIEFp_fKtpzRdY-x089JQ";
  public tokenSubject= new Subject<string>(); 
  host:string = "http://192.168.254.169:8080/api/v1";
  isAuth:boolean=false;
  loading = this.loadingCtrl.create({
      message: 'Connection...',
  });


  constructor( private http:HttpClient,
                private toastCtrl:ToastController,
                private navCtrl:NavController,
                private loadingCtrl:LoadingController,
              ) { }


  public emitToken(){
    this.tokenSubject.next(this.token);
  }

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

    this.http.post(this.host+"/student",KED,options).subscribe(
      response=>
      {
        console.log(response)
        const student :StudentRepo = response as StudentRepo;
        this.currentStudent= (new Student()).build(student);

        console.log("Email :"+this.currentStudent.getEmail());
      },
  
      async (err)=> {
        (await this.loading).dismiss();
        console.log("ERROR");
      },
      async ()=> {
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
    this.http.post(this.host+"/auth/student/token",null,{headers:header}).subscribe(data=>{

      console.log(data);

      let user = data as StudentToken;

      this.token=user.token;
      // this.storage.setItem('ACCESS-TOKEN',this.token);
      this.currentStudent= (new Student()).build(user.user);
      console.log("name : "+this.currentStudent.getFirstName());

    },async (err)=>{
      (await this.loading).dismiss();
      console.log("ERROR");
      console.log(err);
    },async ()=>{
      (await this.loading).dismiss();
      this.navCtrl.setDirection('root')
      this.navCtrl.navigateForward("home").then(()=>{
        this.showToast("KED");
      });
    });

  }

  
}
