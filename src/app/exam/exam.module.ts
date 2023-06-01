import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamPageRoutingModule } from './exam-routing.module';

import { ExamPage } from './exam.page';
import { QuestionViewComponent } from '../question.view/question.view.component';
import { LibeletCmpComponent } from '../libelet-cmp/libelet-cmp.component';
import { ResponseCmpComponent } from '../response-cmp/response-cmp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamPageRoutingModule
  ],
  declarations: [ExamPage,QuestionViewComponent,LibeletCmpComponent,ResponseCmpComponent]
})
export class ExamPageModule {}
