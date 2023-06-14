import { Injectable } from '@angular/core';
import { Assignment } from '../Models/Assignment';
import { Classe } from '../Models/Classe';
import { AuthentificationService } from './authentification.service';
import { ClasseServiceService } from './classe.service.service';
import { Subject } from 'rxjs';
import { Document } from '../Models/Document';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentServiceService {


  private assignments!:Assignment[];
  private classes!:Classe[];
  public assigmentSub = new Subject<Assignment[]>();
  host:string = "http://localhost:8080/api/v1";


  constructor(private authServ:AuthentificationService,
    private classeServ:ClasseServiceService,private http:HttpClient) { 

      classeServ.ClasseSubject.subscribe((data:Classe[])=>{
        this.classes=data;
      });
      classeServ.emitClasse();
    }

    public emite(){
      this.assigmentSub.next(this.assignments.slice());
    }


    loadMyAssignment(){
      console.log("load MY Assignments");
      this.assignments=[];
      let ass;
      let doc;
      for(let cl of this.classes){
        for(let i = 0;i<cl.getAssignments().length;i++){
          ass = Object.assign(new Assignment(),cl.getAssignments()[i]);
          ass.setClasse(cl);
          doc = Object.assign(new Document(),ass.getDocument());
          ass.setDocument(doc);
          ass.setDateGiven(new Date(ass.getDateGiven()));
          ass.setExpirationDate(new Date(ass.getExpirationDate()));

          this.assignments.push(ass);
        }
      }
      console.log(this.assignments);
      this.emite();
    }


    
    Send(file: File , idassignment:number) {

      let header = new HttpHeaders({
        'Content-Type':'multipart/form-data',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',  
      });
      this.http.post(this.host+"/student/"+this.authServ.currentStudent.getId()+"/copy/assignment/"+idassignment+"",file).subscribe(data=>{
        console.log("data");
        console.log(data);
        
      },err=>{
        console.log("err");
        console.log(err);
      },()=>{
        console.log("finish");
      });
    }

}
