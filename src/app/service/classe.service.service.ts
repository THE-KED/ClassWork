import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { Classe } from '../Models/Classe';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClasseRepo } from '../Models/ClasseRepo';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {


  private classes:Array<Classe>;
  public ClasseSubject= new Subject<Array<Classe>>();
  fClasse!:Classe;
  host:string = "http://192.168.232.169:8080/api/v1";
  // header: HttpHeaders= new HttpHeaders({

  //   Authorization:"Bearer "+this.authServ.token,  
  // });

  constructor(private authServ:AuthentificationService,
    private http:HttpClient) {
      this.classes=[];
     }

  public emitClasse(){
    console.log(this.classes);
    this.ClasseSubject.next(this.classes.slice());
  }

  async joint(Id:number){
    this.http.put(this.host+"/student/"+this.authServ.currentStudent.getId()+"/classes/"+Id+"/",null).subscribe((data)=>{
      console.log(data);
    },
    (err)=>{
      console.log(err);
    },()=>{
      this.classes.push(this.fClasse);
      this.emitClasse();
    });
  }

  async loadMyClass(){

    console.log(this.authServ.currentStudent.getClasses());
    this.classes=[];
    for(let cl of this.authServ.currentStudent.getClasses()){
      this.classes.push(Object.assign(new Classe(),cl));
    }
    this.emitClasse();

    // this.http.get(this.host+"/student/"+this.authServ.currentStudent.getId()+"/getClasses").subscribe((data)=>{
       
    //   let cls = data as LClassRepo;
    //     console.log("cls");
    //     console.log(cls)
    //     for(let d of cls.classes){
    //       console.log(d);
    //       let c = new Classe().build(d);
    //       console.log(c);
    //     }
    // },
    // (err)=>{
    //   console.log(err);
    // },()=>{
    //   console.log("OK");
    // });
  }

  async findClass(idClass:string){

    return new Promise<Classe>((resolve, reject) => {      
      this.http.get(this.host+"/student/classe/"+idClass).subscribe(data=>{
        console.log(data);
        let classR = data as ClasseRepo;
        console.log(new Classe().build(classR));
        let classe =new Classe().build(classR);
        this.fClasse = classe;
        resolve(classe);
      },err=>{
        console.log("Erreur");
        console.log(err);
        reject(null);
      },()=>{
        console.log("finish");
      });

    })

  }

}
