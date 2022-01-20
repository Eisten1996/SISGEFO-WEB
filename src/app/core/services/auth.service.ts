import { Injectable } from '@angular/core';
import { authArray } from '../mock/authMock';
import { userArray } from '../mock/UserMock';
import { Auth } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authList = authArray;
  userResponse;
  users = userArray;
  userData: any;
  constructor() {
    this.userData = localStorage.getItem('userData');
  }

  public login(auth: Auth) {
    this.userResponse = this.authList.filter(
      (a) => a.email == auth.email && a.password == auth.password
    );
    console.log(this.userResponse);

    if (this.userResponse.length != 0) {
      localStorage.setItem(
        'userData',
        JSON.stringify(this.users.filter((u) => u.email == auth.email)[0])
      );
      return this.users.filter((u) => u.email == auth.email)[0];
    } else {
      return null;
    }
  }
}
