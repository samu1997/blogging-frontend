import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Users, loginUser, createUser } from '../interfaces/users.interface';

import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Local NodeJS Rest API
  private baseURL = 'http://localhost:3000/api';
  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
  ) {}

  userLogin(data: loginUser): Observable<Users[]> {
    return this.http
      .post<Users[]>(`${this.baseURL}/v1/users/login`, data, this.httpOptions)
      .pipe(
        catchError((error) => {
          this.sharedService.setToastData({
            type: 'danger',
            message: error.error.message,
          });
          // Handle the error and optionally log it
          console.error('API Error:', error);
          return throwError(() => new Error(error.error.message));
        }),
      );
  }

  createUser(data: createUser): Observable<Users[]> {
    return this.http
      .post<Users[]>(`${this.baseURL}/v1/users`, data, this.httpOptions)
      .pipe(
        catchError((error) => {
          this.sharedService.setToastData({
            type: 'danger',
            message: error.error.message,
          });
          // Handle the error and optionally log it
          console.error('API Error:', error);
          return throwError(() => new Error(error.error.message));
        }),
      );
  }

  getProfile(): Observable<Users[]> {
    return this.http
      .get<Users[]>(`${this.baseURL}/v1/users`, this.httpOptions)
      .pipe(
        catchError((error) => {
          this.sharedService.setToastData({
            type: 'danger',
            message: error.error.message,
          });
          // Handle the error and optionally log it
          console.error('API Error:', error);
          return throwError(() => new Error(error.error.message));
        }),
      );
  }
}
