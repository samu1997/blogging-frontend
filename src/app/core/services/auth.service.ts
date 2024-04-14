import { PLATFORM_ID, Injectable, Inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';

import _ from 'lodash';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isBrowser: boolean;
  constructor(
    public jwtHelper: JwtHelperService,
    @Inject(DOCUMENT) private dom: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public isAuthenticated(): boolean {
    const token = this.getUser();
    // Check whether the token is expired and return
    // true or false
    if (_.isEmpty(token)) {
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token.token);
  }

  public saveUser(user: any): void {
    if (this.isBrowser) {
      window.localStorage.removeItem(USER_KEY);
      window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  }

  public getUser(): any {
    if (this.isBrowser) {
      const user = window.localStorage.getItem(USER_KEY);
      if (user) {
        return JSON.parse(user);
      }
    }

    return {};
  }

  public saveToken() {}
}
