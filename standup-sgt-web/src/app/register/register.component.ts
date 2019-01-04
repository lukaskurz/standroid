import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { LoginError } from '../shared/models/login-error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerError: string;

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  register(email: string, password: string, repeatPassword: string) {
    this.registerError = null;
    if (!password || !repeatPassword) {
      this.registerError = "Both passwords need to be entered.";
      return;
    }
    if (password !== repeatPassword) {
      this.registerError = "The passwords are not the same.";
      return;
    }
    this.auth.register(email, password)
      .then(() => {
        this.redirectToVerificationPage();
      })
      .catch((reason: LoginError) => {
        this.registerError = reason.message;
      });
  }

  registerWithGoogle() {
    this.registerError = null;
    this.auth.googleLogin()
      .then(() => {
        this.redirectToLogin();
      })
      .catch((reason: LoginError) => {
        this.registerError = reason.message;
      });
  }

  redirectToVerificationPage() {
    this.router.navigateByUrl("email-verification");
  }

  redirectToLogin() {
    this.router.navigateByUrl("login");
  }
}
