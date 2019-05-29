import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector:'app-sigin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent {
    constructor(private authService: AuthService) {

    }

    onSignIn(form: NgForm) {
        const email = form.value.email;
        const pwd = form.value.password;
    
        this.authService.signinUser(email,pwd);
      }
}