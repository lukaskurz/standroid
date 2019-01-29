import { Component, OnInit } from "@angular/core";
import { AuthService } from "@core/auth/auth.service";
import { Router } from "@angular/router";
import { LoginError } from "@shared/models/login-error";
import { InstallationService } from "@app/core/services/installation.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginError: string;

  constructor(
    public auth: AuthService,
    public router: Router,
    public is: InstallationService
  ) {
    this.auth.user.subscribe(user => {
      if (!!user) {
        this.is.hasInstallation().then((v: boolean) => {
          if (v === true) {
            this.redirectToSecurePage();
          } else {
            this.redirectToInstall();
          }
        });
      }
    });
  }

  ngOnInit() {}

  login(email: string, password: string) {
    this.auth
      .emailAndPasswordLogin(email, password)
      .then(credentials => {
        this.redirectToSecurePage();
      })
      .catch((reason: LoginError) => {
        this.loginError = reason.message;
      });
  }

  loginWithGoogle() {
    this.auth
      .googleLogin()
      .then(() => {
        this.redirectToSecurePage();
      })
      .catch((reason: LoginError) => {
        this.loginError = reason.message;
      });
  }

  redirectToSecurePage() {
    this.router.navigateByUrl("dashboard");
  }

  redirectToInstall() {
    this.router.navigateByUrl("install");
  }
}
