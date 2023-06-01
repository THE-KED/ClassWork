import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentPagePage } from './assignment.page.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentPagePageRoutingModule {}
