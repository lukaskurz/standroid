import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { ClrWizard, ClrModal } from '@clr/angular';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {

  @ViewChild("wizard") wizard: ClrWizard;
  wizardOpen = true;

  @ViewChild("reminder") reminderModal: ClrModal;
  reminderModalOpen = false;

  user: User;

  constructor(public auth: AuthService, private router: Router) {
    auth.user.subscribe(user => {
      this.user = user;
    });
  }

  doCancel() {
    this.reminderModal.open();
  }

  closeModal() {
    this.reminderModal.close();
  }

  redirectToDashboard() {
    this.router.navigateByUrl("dashboard");
  }

}
