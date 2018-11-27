import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.styl']
})
export class EmailVerificationComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService) {
    auth.user.subscribe(user => {
      if (!!user && user.emailVerified === true) {
        this.redirectToLogin();
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
