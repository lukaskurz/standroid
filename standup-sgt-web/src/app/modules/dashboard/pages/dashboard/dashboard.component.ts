import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { UserService } from '@app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  user: User;

  screaming = false;

  constructor(public us: UserService, private auth: AuthService, private router: Router) {
    us.getUser().subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl("login");
  }

}
