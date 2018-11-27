import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  register(email: string, password: string) {
    this.auth.register(email, password).catch((reason) => {
      this.onFail(reason);
    });
  }

  registerWithGoogle() {
    this.auth.googleLogin();
  }

  onFail(reason?: any) {
    alert("register failed");
    alert(reason);
  }

}
