import { Component, OnInit } from '@angular/core';
import { DashboardStorageService } from 'src/app/core/services/dashboard-storage.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  hours: number[] = [];
  minutes: number[] = [];

  constructor(
    public storage: DashboardStorageService,
    private afs: AngularFirestore,
    private router: Router,
    private auth: AuthService,
    private http: HttpClient
  ) {

    for (let counter = 0; counter < 24; counter++) {
      this.hours.push(counter);
    }
    for (let counter = 0; counter < 60 / 5; counter++) {
      this.minutes.push(counter * 5);
    }
  }

  ngOnInit() {
  }

  saveSchedule() {
    this.afs
      .collection("reports")
      .doc(this.storage.currentReport.uid)
      .update({ schedule: this.storage.currentReport.schedule });
  }


}
