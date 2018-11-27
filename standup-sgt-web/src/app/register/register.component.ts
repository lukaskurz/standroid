import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { LoginError } from '../util/login-error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent implements OnInit {
  registerError: string;

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  register(email: string, password: string) {
    this.auth.register(email, password)
      .then(() => {
        this.redirectToVerificationPage();
      })
      .catch((reason: LoginError) => {
        this.registerError = reason.message;
      });
  }

  registerWithGoogle() {
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
