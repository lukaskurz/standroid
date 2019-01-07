import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { take } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";
import { UserService } from "../services/user.service";
import { InstallationService } from "../services/installation.service";

@Injectable({
  providedIn: "root"
})
export class InstallGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private is: InstallationService,
    private router: Router
  ) {}

  canActivate() {
    return new Promise((res, rej) => {
      // Check authentication and email verification
      this.auth.user.subscribe(user => {
        if (user == null) {
          this.router.navigate(["login"]);
          rej();
        } else if (user.emailVerified === false) {
          this.router.navigate(["email-verified"]);
          rej();
        } else {
          res();
        }
      });
    })
      .then(() => {
        return new Promise((res, rej) => {
          this.is.hasInstallation().then((exists: boolean) => {
            if (exists) {
              this.router.navigate(["dashboard"]);
              rej();
            } else {
              res();
            }
          });
        });
      })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
}
