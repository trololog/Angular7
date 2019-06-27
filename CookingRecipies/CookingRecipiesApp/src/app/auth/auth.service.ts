import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
    .pipe(catchError(errorRes => {
      let errorMessage = 'Unknown error';
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }

      switch(errorRes.error.error.message) {
        case 'EMAIL_EXIST':
            errorMessage = 'Email already exists';
      }

      return throwError(errorMessage);
    }))
  };

  login(email: string, password: string) {
    this.url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAvk2miI6BYXzpSTT2rZ72k3HR5mqIMBNc';

    return this.http.post<AuthResponseData>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true
    });

  }
}
