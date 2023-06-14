import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthentificationService } from './service/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthGuardGuard implements CanActivate {

  constructor(private router:NavController,private authService:AuthentificationService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isAuth){
        return true;
    }
    else{
        this.router.navigateForward("login");
        return false
    }
  }

  
}
