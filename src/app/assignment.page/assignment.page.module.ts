import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentPagePageRoutingModule } from './assignment.page-routing.module';

import { AssignmentPagePage } from './assignment.page.page';
import { AssignmentCmpComponent } from '../assignment-cmp/assignment-cmp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentPagePageRoutingModule
  ],
  declarations: [AssignmentPagePage , AssignmentCmpComponent]
})
export class AssignmentPagePageModule {}
