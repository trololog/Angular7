import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>();


  url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAvk2miI6BYXzpSTT2rZ72k3HR5mqIMBNc';

  constructor(private http: HttpClient) {}

  signupUser(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError),
    tap(resData => this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)));
  }

  login(email: string, password: string) {
    this.url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAvk2miI6BYXzpSTT2rZ72k3HR5mqIMBNc';

    return this.http.post<AuthResponseData>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );

    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Unknown error';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXIST':
        errorMessage = 'Email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Incorrect password';
        break;
    }

    return throwError(errorMessage);
  }
}
