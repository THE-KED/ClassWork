import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluationsDisplayPageRoutingModule } from './evaluations-display-routing.module';

import { EvaluationsDisplayPage } from './evaluations-display.page';
import { EvaluationCardComponent } from '../evaluation-card/evaluation-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluationsDisplayPageRoutingModule
  ],
  declarations: [EvaluationsDisplayPage,EvaluationCardComponent]
})
export class EvaluationsDisplayPageModule {}
