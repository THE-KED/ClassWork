import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursPagePageRoutingModule } from './cours.page-routing.module';

import { CoursPagePage } from './cours.page.page';
import { CoursCourCardComponent } from '../cours-cour-card/cours-cour-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursPagePageRoutingModule
  ],
  declarations: [CoursPagePage,CoursCourCardComponent]
})
export class CoursPagePageModule {}
