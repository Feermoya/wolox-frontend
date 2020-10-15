import { Injectable } from '@angular/core';
import { Tech } from '../../class/tech.interface';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TechsService {


  public numberTechs: number;
  url = 'https://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http
      .get<Tech[]>(this.url)
      .pipe(catchError(this.getError));
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



