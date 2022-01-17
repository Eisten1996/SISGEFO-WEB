import { Injectable } from '@angular/core';
import { Auth } from '../models/auth.models';
import { authArray } from '../mock/authMock';
import { userArray } from '../mock/UserMock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authList = authArray;
  userResponse;
  users = userArray;
  constructor() {}

  public login(auth: Auth) {
    this.userResponse = this.authList.filter(
      (a) => a.email == auth.email && a.password == auth.password
    );
    console.log(this.userResponse);

    if (this.userResponse.length != 0) {
      return this.users.filter((u) => u.email == auth.email)[0];
    } else {
      return null;
    }
  }
}
