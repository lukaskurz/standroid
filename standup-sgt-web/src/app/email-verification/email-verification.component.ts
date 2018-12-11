import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService) {
    auth.user.subscribe(user => {
      if (!!user && user.emailVerified === true) {
        this.redirectToLogin();
      } else {
        const userReload = setInterval(() => {
          auth.user.pipe(first()).subscribe(u => {
            user.reload();
            console.log(u.emailVerified);
            if (u.emailVerified === true) {
              clearInterval(userReload);
              this.redirectToLogin();
            }
          });
        }, 3000);
      }
    });
  }

  redirectToLogin() {
    this.router.navigateByUrl("login");
  }

  resendEmail() {
    this.auth.user.subscribe(user => {
      user.sendEmailVerification();
    });
  }

  ngOnInit() {
  }

}
