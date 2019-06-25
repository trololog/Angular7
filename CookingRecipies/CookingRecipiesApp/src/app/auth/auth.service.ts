import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAvk2miI6BYXzpSTT2rZ72k3HR5mqIMBNc';

  constructor(private http: HttpClient) {}

  signupUser(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  };

  signinUser(email: string, password: string) {

  }
}
