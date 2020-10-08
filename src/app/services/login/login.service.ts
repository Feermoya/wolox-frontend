import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { User } from '../../class/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends CommonService<User> {

  url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login';
  constructor(http: HttpClient) {
    super(http);
  }
}
