import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(public auth: AuthService) {
    auth.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
