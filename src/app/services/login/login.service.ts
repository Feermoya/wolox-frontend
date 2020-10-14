import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends CommonService<any> {

  userToken: any;
  verify = false;
  url = 'https://private-8e8921-woloxfrontendinverview.apiary-mock.com/login';
  constructor(http: HttpClient, public router: Router) {
    super(http);
  }

  saveToken(idToken: any): void {
    this.userToken = idToken;
    localStorage.setItem('token', idToken.token);
    console.log(idToken.token);
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.verify = true;
      return localStorage.getItem('token');
    } else {
      console.log('no hay token');
      this.userToken = '';
    }
    return this.userToken.token;
  }

  logout() {
    localStorage.clear();
    console.log('Sesion cerrada');
    this.router.navigate(['/login']);
  }


}
