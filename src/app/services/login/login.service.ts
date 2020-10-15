import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../class/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userToken: any;
  verify = false;
  url = 'https://private-8e8921-woloxfrontendinverview.apiary-mock.com/login';

  constructor(private http: HttpClient, public router: Router) {
  }

  post(formData: User) {
    return this.http
      .post(this.url, formData)
      .pipe(catchError(this.getError));
  }


  saveToken(idToken: any): void {
    this.userToken = idToken;
    localStorage.setItem('token', idToken.token);
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.verify = true;
      return localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken.token;
  }

  logout() {
    this.verify = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public getError(err) {
    let errorMenssage: string;

    if (err.error instanceof ErrorEvent) {
      errorMenssage = `An error occurred: ${err.error.message}`;
    } else {
      errorMenssage = `Backend returned: ${err.error.message}`;
    }
    return throwError(errorMenssage);
  }


}
