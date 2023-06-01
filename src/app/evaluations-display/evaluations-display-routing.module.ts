import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluationsDisplayPage } from './evaluations-display.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluationsDisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationsDisplayPageRoutingModule {}
