import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { Classe } from '../Models/Classe';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ClasseRepo } from '../Models/ClasseRepo';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {


  private Classes:Classe[]=[];
  public ClasseSubject= new Subject<Classe[]>()
  host:string = "http://192.168.254.169:8080/api/v1";

  constructor(private authServ:AuthentificationService,
    private http:HttpClient) { }

  public emitClasse(){
    this.ClasseSubject.next(this.Classes.slice())
  }

  async loadMyClass(Id:number){

    this.http.get(this.host).subscribe((data)=>{
      console.log(data);
    },
    (err)=>{
      console.log(err);
    });
  }

  findClass():ClasseRepo{
    return new ClasseRepo();
  }

}
