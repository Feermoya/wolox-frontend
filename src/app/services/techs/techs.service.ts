import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class TechsService extends CommonService<any> {

  url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs';
  constructor(http: HttpClient) {
    super(http);
  }
}



