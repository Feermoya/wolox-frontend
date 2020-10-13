import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';
import { Tech } from '../../class/tech.interface';

@Injectable({
  providedIn: 'root'
})
export class TechsService extends CommonService<any> {

  url = 'https://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs';
  constructor(http: HttpClient) {
    super(http);
  }

}



