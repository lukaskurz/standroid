import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }


  login(email: string, password: string) {
    this.auth.emailAndPasswordLogin(email, password).then(() => {
      alert("success");
    })
    .catch(reason => {
      alert("fail");
    });
  }

  loginWithGoogle() {
    this.auth.googleLogin().then(() => {
      alert("success");
    })
    .catch(reason => {
      alert("fail");
    });
  }
}
