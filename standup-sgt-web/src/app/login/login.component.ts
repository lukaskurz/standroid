import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { LoginError } from '../util/login-error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: string;

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }


  login(email: string, password: string) {
    this.auth.emailAndPasswordLogin(email, password)
      .then(credentials => {
        this.redirectToSecurePage();
      })
      .catch((reason: LoginError) => {
        if (reason.code === "auth/not-verified") {
          this.redirectToEmailVerification();
        } else {
          this.loginError = reason.message;
        }
      });
  }

  loginWithGoogle() {
    this.auth.googleLogin()
      .then(() => {
        this.redirectToSecurePage();
      })
      .catch((reason: LoginError) => {
        this.loginError = reason.message;
      });
  }

  redirectToEmailVerification() {
    this.router.navigateByUrl("email-verification");
  }

  redirectToSecurePage() {
    this.router.navigateByUrl("dashboard");
  }
}
