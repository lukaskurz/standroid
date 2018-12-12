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

  report = {
    name: "",
    schedule: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
      time: null,
      hour: 9,
      minute: 30,
    }
  };

  hours: number[] = [];
  minutes: number[] = [];

  constructor(private router: Router) {
    for (let counter = 0; counter < 24; counter++) {
      this.hours.push(counter);
    }
    for (let counter = 0; counter < 60; counter++) {
      this.minutes.push(counter);
    }
  }

  anyDayChecked() {
    if (
      this.report.schedule.monday ||
      this.report.schedule.tuesday ||
      this.report.schedule.wednesday ||
      this.report.schedule.thursday ||
      this.report.schedule.friday ||
      this.report.schedule.saturday ||
      this.report.schedule.sunday
    ) {
      return true;
    }
    return false;
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
