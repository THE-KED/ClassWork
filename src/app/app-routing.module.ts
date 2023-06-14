import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ServiceAuthGuardGuard } from './service-auth-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[ServiceAuthGuardGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'assignment.page',
    loadChildren: () => import('./assignment.page/assignment.page.module').then( m => m.AssignmentPagePageModule),
    canActivate:[ServiceAuthGuardGuard]

  },
  {
    path: 'evaluations-display',
    loadChildren: () => import('./evaluations-display/evaluations-display.module').then( m => m.EvaluationsDisplayPageModule),
    canActivate:[ServiceAuthGuardGuard]

  },
  {
    path: 'exam/:index',
    loadChildren: () => import('./exam/exam.module').then( m => m.ExamPageModule),
    canActivate:[ServiceAuthGuardGuard]

  },
  {
    path: 'cours.page',
    loadChildren: () => import('./cours.page/cours.page.module').then( m => m.CoursPagePageModule),
    canActivate:[ServiceAuthGuardGuard]

  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
