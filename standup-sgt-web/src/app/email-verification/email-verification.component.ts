import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { first } from 'rxjs/operators';
import { User } from 'firebase';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  unverfifiedUser: User;

  constructor(public router: Router, public auth: AuthService) {
    auth.user.subscribe(user => {
      if (!!user && user.emailVerified === true) {
        this.redirectToLogin();
      } else {
        this.unverfifiedUser = user;
        const userReload = setInterval(() => {
          this.unverfifiedUser.reload();
          if (this.unverfifiedUser.emailVerified === true) {
            clearInterval(userReload);
            this.redirectToLogin();
          }
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
