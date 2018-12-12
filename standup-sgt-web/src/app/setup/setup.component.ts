import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {

  @ViewChild("wizard") wizard: ClrWizard;
  wizardOpen = true;

  user: User;

  constructor(public auth: AuthService, private router: Router) {
    auth.user.subscribe(user => {
      this.user = user;
    });
  }

}
