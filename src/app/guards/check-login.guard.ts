import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {


  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): boolean {
    if (!this.loginService.readToken()) {
      return true;
    } else {
      this.router.navigate(['/techs']);
      return false;
    }
  }
}
