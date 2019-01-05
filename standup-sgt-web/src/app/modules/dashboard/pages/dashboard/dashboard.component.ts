import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;

  screaming = false;

  constructor(public auth: AuthService, private router: Router) {
    auth.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl("login");
  }

}
