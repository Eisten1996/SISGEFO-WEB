import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { authArray } from '../mock/authMock';
import { userArray } from '../mock/UserMock';
import { Auth } from '../models/auth.models';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authList = authArray;
  userResponse;
  users = userArray;
  userData: any;
  constructor(private http: HttpClient) {
    this.userData = localStorage.getItem('userData');
  }

  public login(auth: Auth) {
    return this.http
      .post(`${environment.API_PHOTOCOPIER}/students/login`, auth)
      .toPromise();
  }
}
