import { Component, OnInit } from '@angular/core';
import { ClasseServiceService } from '../service/classe.service.service';
import { Classe } from '../Models/Classe';
import { AlertController, LoadingController } from '@ionic/angular';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-cours.page',
  templateUrl: './cours.page.page.html',
  styleUrls: ['./cours.page.page.scss'],
})
export class CoursPagePage implements OnInit {

  isOpend=false
  isAlertOpen = false;
  idClasse:string = "";


  public alertButtons = ['OK'];
  public header ={
    text:"Base de donnee",
  };


  myClasses!:Classe[];
  fClasse!:Classe;

  loading = this.loadingCtrl.create({
    message: 'Recherche...',
    duration: 2999
});

  boo:boolean=false;
  constructor(private classeServ:ClasseServiceService,private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.myClasses=[];
    this.classeServ.ClasseSubject.subscribe((data)=>{
      this.myClasses = data;
    })
    this.classeServ.emitClasse();
    if(this.myClasses.length!=0)
      this.boo=true;
  }

  async setOpen(isOpen: boolean) {
    // this.classeServ.findClass(this.idClasse).then((data:Classe)=>{
    //   this.fClasse=data;
    // });
    (await this.loading).present();
    new Promise<Student>((resolve, reject) => {
      setTimeout(() => {
            this.isAlertOpen = isOpen;
            resolve(new Student());
      },3000);

      reject(null);
    })

  }
  close(){
    this.isAlertOpen = false
  }

  joint(id:number){
    // this.classeServ.joint(id);
    this.isAlertOpen = false
    this.boo = true;
  }

  
}
