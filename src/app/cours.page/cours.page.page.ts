import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cours.page',
  templateUrl: './cours.page.page.html',
  styleUrls: ['./cours.page.page.scss'],
})
export class CoursPagePage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
  
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
      cssClass:"alt",
    });

    await alert.present();
  }
}
