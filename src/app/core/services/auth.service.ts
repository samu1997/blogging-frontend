import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';

import { isEmpty } from 'lodash';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localStorage: any;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public jwtHelper: JwtHelperService,
  ) {
    this.localStorage = document.defaultView?.localStorage;
  }

  public isAuthenticated(): boolean {
    const token = this.getUser();
    // Check whether the token is expired and return
    // true or false
    if (isEmpty(token)) {
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token.token);
  }

  public saveUser(user: any): void {
    this.localStorage.removeItem(USER_KEY);
    this.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = this.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public saveToken() {}
}
