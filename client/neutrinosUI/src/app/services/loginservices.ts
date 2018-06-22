import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseRequestOptions } from '@angular/http/src/base_request_options';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  signUp(userInfo: UserInfo) {
    return this.http.post('http://localhost:3000/api/users', userInfo)
      .toPromise()
      .then(res => { return res; });
  }

  login(loginDetails: LoginDetails) {

    return this.http.post('http://localhost:3000/api/users/login', loginDetails)
      .toPromise()
      .then(res => {
        return <AccessToken>res["status"];
      });
  }
}

export interface UserInfo {
  id?: string,
  name?: string,
  email?: string,
  password?: string
}

export interface LoginDetails {
  email?: string,
  password?: string

}

export interface AccessToken {
  userId?: string,
  successful?: boolean,
  message?: string
}