import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService<Entity>  {

  protected url: string;

  constructor(protected http: HttpClient) { }

  getAll(): Observable<Entity[]> {
    return this.http
      .get<Entity[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  post(entidad: Entity): Observable<Entity> {
    return this.http
      .post<Entity>(this.url, entidad)
      .pipe(catchError(this.handleError));
  }


  public handleError(err) {
    let errorMenssage: string;

    if (err.error instanceof ErrorEvent) {
      errorMenssage = `An error occurred: ${err.error.message}`;
    } else {
      errorMenssage = `Backend returned: ${err.error.message}`;
    }
    return throwError(errorMenssage);
  }
}
